const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

async function uploadToGoogleDrive() {
  try {
    // Parse service account credentials from environment
    const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    // Initialize Google Drive API
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ['https://www.googleapis.com/auth/drive.file']
    });

    const drive = google.drive({ version: 'v3', auth });

    // Files to upload
    const files = [
      {
        name: 'City_Defense_Z_Complete_GDD.docx',
        path: './City_Defense_Z_Complete_GDD.docx'
      },
      {
        name: 'City_Defense_Z_Complete_GDD_Skeleton.docx', 
        path: './City_Defense_Z_Complete_GDD_Skeleton.docx'
      }
    ];

    console.log('🚀 Starting Google Drive upload process...');

    for (const file of files) {
      if (!fs.existsSync(file.path)) {
        console.log(`⚠️  File not found: ${file.path}`);
        continue;
      }

      try {
        // Check if file already exists in the folder
        const existingFiles = await drive.files.list({
          q: `name='${file.name}' and parents in '${folderId}' and trashed=false`,
          fields: 'files(id, name)'
        });

        const fileMetadata = {
          name: file.name,
          parents: [folderId]
        };

        const media = {
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          body: fs.createReadStream(file.path)
        };

        if (existingFiles.data.files.length > 0) {
          // Update existing file
          const fileId = existingFiles.data.files[0].id;
          console.log(`📝 Updating existing file: ${file.name}`);
          
          await drive.files.update({
            fileId: fileId,
            media: media,
            fields: 'id, name, modifiedTime'
          });
          
          console.log(`✅ Updated: ${file.name}`);
        } else {
          // Create new file
          console.log(`📄 Creating new file: ${file.name}`);
          
          const response = await drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id, name, webViewLink'
          });
          
          console.log(`✅ Created: ${file.name}`);
          console.log(`🔗 Link: ${response.data.webViewLink}`);
        }

      } catch (error) {
        console.error(`❌ Error uploading ${file.name}:`, error.message);
      }
    }

    // Generate summary report
    const timestamp = new Date().toISOString();
    const summary = {
      timestamp,
      uploadedFiles: files.map(f => f.name),
      status: 'completed'
    };

    console.log('📊 Upload Summary:', JSON.stringify(summary, null, 2));
    
    // Create summary file in Google Drive
    const summaryMetadata = {
      name: `GDD_Sync_Report_${timestamp.split('T')[0]}.json`,
      parents: [folderId]
    };

    const summaryMedia = {
      mimeType: 'application/json',
      body: JSON.stringify(summary, null, 2)
    };

    await drive.files.create({
      resource: summaryMetadata,
      media: summaryMedia,
      fields: 'id, name'
    });

    console.log('🎉 All files successfully synced to Google Drive!');

  } catch (error) {
    console.error('💥 Fatal error in upload process:', error);
    process.exit(1);
  }
}

// Enhanced error handling and logging
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the upload
uploadToGoogleDrive(); 