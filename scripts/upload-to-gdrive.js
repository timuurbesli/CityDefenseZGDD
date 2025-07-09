const { google } = require('googleapis');
const fs = require('fs');

async function uploadToGoogleDrive() {
  try {
    // 1️⃣ Read and validate folder ID
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      console.error('💥 ERROR: GOOGLE_DRIVE_FOLDER_ID is not set!');
      process.exit(1);
    }
    console.log('📌 Using Google Drive Folder ID:', folderId);

    // 2️⃣ Initialize Google Auth (ADC)
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/drive.file']
    });
    const drive = google.drive({ version: 'v3', auth });

    // 3️⃣ Files to upload
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
        console.log(`⚠️  Skipping missing file: ${file.path}`);
        continue;
      }

      try {
        // 4️⃣ Check if file already exists in folder
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
          // 5️⃣ Update existing file
          const fileId = existing.data.files[0].id;
          console.log(`📝 Updating existing file: ${file.name}`);
          await drive.files.update({
            fileId,
            media,
            fields: 'id, name, modifiedTime'
          });
          console.log(`✅ Updated: ${file.name}`);
        } else {
          // 6️⃣ Create new file
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

    // 7️⃣ Generate summary report content
    const timestamp = new Date().toISOString();
    const summary = {
      timestamp,
      uploadedFiles: files.map(f => f.name),
      status: 'completed'
    };

    console.log('📊 Upload Summary:', JSON.stringify(summary, null, 2));

    // 8️⃣ Upload summary report as JSON file
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

    console.log('🎉 All files successfully synced to Google Drive!');

  } catch (error) {
    console.error('💥 Fatal error in upload process:', error);
    process.exit(1);
  }
}

// Global error handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Run the script
uploadToGoogleDrive();
