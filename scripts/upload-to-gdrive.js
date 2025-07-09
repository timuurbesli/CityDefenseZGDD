const { google } = require('googleapis');
const fs = require('fs');

async function uploadToGoogleDrive() {
  try {
    console.log('🚀 Starting Google Drive upload process...');
    console.log('Converted files:', process.env.CONVERTED_FILES || 'None');

    // Check folder ID
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      console.error('💥 ERROR: GOOGLE_DRIVE_FOLDER_ID is not set!');
      process.exit(1);
    }
    console.log('📌 Using Google Drive Folder ID:', folderId);

    // Use ADC (which works in GitHub Actions after google-github-actions/auth@v2)
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/drive.file']
    });
    const drive = google.drive({ version: 'v3', auth });

    // Get list of converted .docx files
    const convertedFiles = (process.env.CONVERTED_FILES || '')
      .trim()
      .split(/\s+/)
      .filter(f => f.length > 0);

    if (convertedFiles.length === 0) {
      console.log('⚠️  No converted files to upload. Exiting.');
      return;
    }

    const uploadResults = [];

    for (const fileName of convertedFiles) {
      if (!fs.existsSync(fileName)) {
        console.warn(`⚠️  File not found locally: ${fileName}`);
        uploadResults.push({ fileName, status: 'not_found' });
        continue;
      }

      try {
        // Check if file already exists in Drive
        const existing = await drive.files.list({
          q: `name='${fileName}' and '${folderId}' in parents and trashed=false`,
          fields: 'files(id, name)'
        });

        const fileMetadata = {
          name: fileName,
          parents: [folderId]
        };

        const media = {
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          body: fs.createReadStream(fileName)
        };

        let result;
        if (existing.data.files.length > 0) {
          const fileId = existing.data.files[0].id;
          console.log(`📝 Updating existing file: ${fileName}`);
          result = await drive.files.update({
            fileId,
            media,
            fields: 'id, name, modifiedTime'
          });
          console.log(`✅ Updated: ${fileName}`);
        } else {
          console.log(`📄 Creating new file: ${fileName}`);
          result = await drive.files.create({
            resource: fileMetadata,
            media,
            fields: 'id, name, webViewLink'
          });
          console.log(`✅ Created: ${fileName}`);
          console.log(`🔗 Link: ${result.data.webViewLink}`);
        }

        uploadResults.push({
          fileName,
          fileId: result.data.id,
          status: 'success'
        });

      } catch (error) {
        console.error(`❌ Error uploading ${fileName}:`, error.message);
        uploadResults.push({
          fileName,
          status: 'error',
          error: error.message
        });
      }
    }

    // Create a summary report and upload
    const timestamp = new Date().toISOString();
    const summary = {
      timestamp,
      convertedFiles,
      results: uploadResults,
      status: 'completed'
    };

    console.log('📊 Upload Summary:', JSON.stringify(summary, null, 2));

    const summaryMetadata = {
      name: `GDD_Sync_Report_${timestamp.split('T')[0]}.json`,
      parents: [folderId]
    };

    const summaryMedia = {
      mimeType: 'application/json',
      body: Buffer.from(JSON.stringify(summary, null, 2))
    };

    console.log('📄 Uploading summary report...');
    await drive.files.create({
      resource: summaryMetadata,
      media: summaryMedia,
      fields: 'id, name, webViewLink'
    });

    console.log('✅ Summary report uploaded!');
    console.log('🎉 All files processed successfully!');

  } catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  }
}

process.on('unhandledRejection', (reason) => {
  console.error('💥 Unhandled Rejection:', reason);
  process.exit(1);
});

uploadToGoogleDrive();
