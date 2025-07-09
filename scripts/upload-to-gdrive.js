const { google } = require('googleapis');
const fs = require('fs');

async function uploadToGoogleDrive() {
  try {
    console.log('🚀 Starting Google Drive upload process...');
    console.log('Environment check:');
    console.log('- NODE_ENV:', process.env.NODE_ENV);
    console.log('- GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS);
    console.log('- Changed MD files:', process.env.CHANGED_MD_FILES || 'None');
    console.log('- Converted files:', process.env.CONVERTED_FILES || 'None');

    // 1️⃣ Read and validate folder ID
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      console.error('💥 ERROR: GOOGLE_DRIVE_FOLDER_ID is not set!');
      process.exit(1);
    }
    console.log('📌 Using Google Drive Folder ID:', folderId);

    // 2️⃣ Initialize Google Auth with proper error handling
    let auth;
    let drive;
    
    try {
      // Check if we're in GitHub Actions with service account
      if (process.env.GOOGLE_SERVICE_ACCOUNT) {
        console.log('🔑 Using Service Account authentication (GitHub Actions)');
        const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
        
        auth = new google.auth.JWT(
          serviceAccount.client_email,
          null,
          serviceAccount.private_key,
          ['https://www.googleapis.com/auth/drive.file']
        );
        
        await auth.authorize();
        console.log('✅ Service Account authentication successful');
        
      } else {
        console.log('🔑 Using Application Default Credentials (local)');
        auth = new google.auth.GoogleAuth({
          scopes: ['https://www.googleapis.com/auth/drive.file']
        });
      }
      
      drive = google.drive({ version: 'v3', auth });
      
      // Test the authentication by making a simple API call
      console.log('🔍 Testing Google Drive API connection...');
      const testResponse = await drive.about.get({ fields: 'user' });
      console.log('✅ Connected to Google Drive as:', testResponse.data.user.emailAddress);
      
    } catch (authError) {
      console.error('❌ Authentication failed:', authError.message);
      if (authError.message.includes('Unexpected token')) {
        console.error('🔍 This usually means the API returned HTML instead of JSON');
        console.error('🔍 Check your credentials and network connection');
      }
      throw authError;
    }

    // 3️⃣ Determine files to upload
    let filesToUpload = [];
    
    if (process.env.CONVERTED_FILES) {
      // In GitHub Actions, use the converted files from environment
      const convertedFiles = process.env.CONVERTED_FILES.trim().split(' ').filter(f => f.length > 0);
      filesToUpload = convertedFiles.map(fileName => ({
        name: fileName,
        path: `./${fileName}`
      }));
      console.log('📋 Files from GitHub Actions environment:', filesToUpload.map(f => f.name));
    } else {
      // Fallback to default files for local development
      filesToUpload = [
        {
          name: 'City_Defense_Z_Complete_GDD.docx',
          path: './City_Defense_Z_Complete_GDD.docx'
        },
        {
          name: 'City_Defense_Z_Complete_GDD_Skeleton.docx',
          path: './City_Defense_Z_Complete_GDD_Skeleton.docx'
        }
      ];
      console.log('📋 Using default files for local development');
    }

    // Filter to only existing files
    const existingFiles = filesToUpload.filter(file => {
      const exists = fs.existsSync(file.path);
      if (!exists) {
        console.log(`⚠️  Skipping missing file: ${file.path}`);
      }
      return exists;
    });

    if (existingFiles.length === 0) {
      console.log('ℹ️  No files to upload - all files are missing or none were converted');
      return;
    }

    console.log(`📤 Uploading ${existingFiles.length} files...`);

    const uploadResults = [];

    for (const file of existingFiles) {
      try {
        console.log(`📄 Processing: ${file.name}`);
        
        // 4️⃣ Check if file already exists in folder with better error handling
        let existing;
        try {
          existing = await drive.files.list({
            q: `name='${file.name}' and '${folderId}' in parents and trashed=false`,
            fields: 'files(id, name, modifiedTime)'
          });
        } catch (listError) {
          console.error(`❌ Error checking existing file ${file.name}:`, listError.message);
          if (listError.message.includes('Unexpected token')) {
            console.error('🔍 API returned HTML instead of JSON - check authentication and permissions');
          }
          throw listError;
        }

        const fileMetadata = {
          name: file.name,
          parents: [folderId]
        };

        const media = {
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          body: fs.createReadStream(file.path)
        };

        let result;
        if (existing.data.files.length > 0) {
          // 5️⃣ Update existing file
          const fileId = existing.data.files[0].id;
          console.log(`📝 Updating existing file: ${file.name} (ID: ${fileId})`);
          
          try {
            result = await drive.files.update({
              fileId,
              media,
              fields: 'id, name, modifiedTime, webViewLink'
            });
            console.log(`✅ Updated: ${file.name}`);
          } catch (updateError) {
            console.error(`❌ Error updating ${file.name}:`, updateError.message);
            throw updateError;
          }
        } else {
          // 6️⃣ Create new file
          console.log(`📄 Creating new file: ${file.name}`);
          
          try {
            result = await drive.files.create({
              resource: fileMetadata,
              media,
              fields: 'id, name, webViewLink'
            });
            console.log(`✅ Created: ${file.name}`);
            console.log(`🔗 Link: ${result.data.webViewLink}`);
          } catch (createError) {
            console.error(`❌ Error creating ${file.name}:`, createError.message);
            throw createError;
          }
        }

        uploadResults.push({
          fileName: file.name,
          fileId: result.data.id,
          status: 'success',
          webViewLink: result.data.webViewLink
        });

      } catch (error) {
        console.error(`❌ Error processing ${file.name}:`, error.message);
        uploadResults.push({
          fileName: file.name,
          status: 'error',
          error: error.message
        });
        
        // Continue with other files instead of failing completely
        continue;
      }
    }

    // 7️⃣ Generate summary report
    const timestamp = new Date().toISOString();
    const summary = {
      timestamp,
      environment: process.env.GITHUB_ACTIONS ? 'GitHub Actions' : 'Local',
      changedMdFiles: process.env.CHANGED_MD_FILES ? process.env.CHANGED_MD_FILES.trim().split(' ').filter(f => f.length > 0) : [],
      convertedFiles: process.env.CONVERTED_FILES ? process.env.CONVERTED_FILES.trim().split(' ').filter(f => f.length > 0) : [],
      uploadedFiles: existingFiles.map(f => f.name),
      results: uploadResults,
      totalFiles: uploadResults.length,
      successfulUploads: uploadResults.filter(r => r.status === 'success').length,
      failedUploads: uploadResults.filter(r => r.status === 'error').length
    };

    console.log('📊 Upload Summary:');
    console.log(JSON.stringify(summary, null, 2));

    // 8️⃣ Upload summary report as JSON file
    try {
      const summaryMetadata = {
        name: `GDD_Sync_Report_${timestamp.split('T')[0]}.json`,
        parents: [folderId]
      };

      const summaryMedia = {
        mimeType: 'application/json',
        body: Buffer.from(JSON.stringify(summary, null, 2))
      };

      console.log('📄 Creating summary report in Google Drive...');
      await drive.files.create({
        resource: summaryMetadata,
        media: summaryMedia,
        fields: 'id, name, webViewLink'
      });
      console.log('✅ Summary report uploaded successfully!');
    } catch (summaryError) {
      console.error('⚠️  Warning: Could not upload summary report:', summaryError.message);
      // Don't fail the whole process for summary report issues
    }

    // 9️⃣ Final status
    const successCount = uploadResults.filter(r => r.status === 'success').length;
    const failCount = uploadResults.filter(r => r.status === 'error').length;
    
    if (failCount > 0) {
      console.log(`⚠️  Process completed with ${successCount} successes and ${failCount} failures`);
      console.log('❌ Some files failed to upload - check the errors above');
      process.exit(1);
    } else {
      console.log('🎉 All files successfully synced to Google Drive!');
    }

  } catch (error) {
    console.error('💥 Fatal error in upload process:');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    if (error.message.includes('Unexpected token')) {
      console.error('');
      console.error('🔍 DEBUGGING INFO:');
      console.error('This error usually means the Google Drive API returned HTML instead of JSON.');
      console.error('Common causes:');
      console.error('1. Invalid or expired authentication credentials');
      console.error('2. Network connectivity issues');
      console.error('3. Google Drive API quota exceeded');
      console.error('4. Incorrect API scopes or permissions');
      console.error('5. Service account key issues (in GitHub Actions)');
      console.error('');
      console.error('Next steps:');
      console.error('1. Check your Google Drive API credentials');
      console.error('2. Verify the service account has access to the folder');
      console.error('3. Check Google Cloud Console for API quota limits');
      console.error('4. Ensure GOOGLE_DRIVE_FOLDER_ID is correct');
    }
    
    process.exit(1);
  }
}

// Global error handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the script
uploadToGoogleDrive();
