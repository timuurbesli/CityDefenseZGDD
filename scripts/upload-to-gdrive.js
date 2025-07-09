const { google } = require('googleapis');
const fs = require('fs');

async function uploadToGoogleDrive() {
  try {
    // Get folder ID from environment
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      console.error('💥 ERROR: GOOGLE_DRIVE_FOLDER_ID is not set!');
      process.exit(1);
    }
    console.log('📌 Using Google Drive Folder ID:', folderId);

    // Initialize Google Auth (ADC)
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/drive.file']
    });

    const drive = google.drive({ version: 'v3', auth });

    // Files to upload (you can customize this list!)
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
        console.log(`⚠️  File not found locally: ${file.path}`);
        continue;
      }

      try {
        // Check if file already exists in Drive folder
        const existing = await drive.files.list({
          q: `name='${file.name}' and '${folderId}' in parents and trashed=false`,
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

        if (existing.data.files.length > 0) {
          // Update existing file
          const fileId = existing.data.files[0].id;
          console.log(`📝 Updating existing file: ${file.name}`);
          await drive.files.update({
            fileId,
            media,
            fields: 'id, name, modifiedTime'
          });
          console.log(`✅ Updated: ${file.name}`);
        } else {
          // Create new file
          console.log(`📄 Creating new file: ${file.name}`);
          const response = await drive.files.create({
            resource: fileMetadata,
            media,
            fields: 'id, name, webViewLink'
          });
          console.log(`✅ Created: ${file.name}`);
          console.log(`🔗 Link: ${response.data.webViewLink}`);
        }

      } catch (error) {
        console.error(`❌ Error uploading ${file.name}:`, error.message);
      }
    }

    // Create summary report in Drive
    const timestamp = new Date().toISOString();
    const summary = {
      timestamp,
      uploadedFiles: files.map(f => f.name),
      status: 'completed'
    };

    console.log('📊 Upload Summary:', JSON.stringify(summary, null, 2));

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

// Enhanced error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

uploadToGoogleDrive();
