# 🔧 Google Drive Automation Setup Guide

## Overview
This guide will help you set up automatic conversion of your Markdown GDD files to DOCX format and sync them to Google Drive whenever you push changes to GitHub.

## 📋 Prerequisites
- Google account with Google Drive access
- GitHub repository for your GDD files
- Google Cloud Console access (free)

## 🚀 Setup Steps

### 1. Create Google Cloud Project & Service Account

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project:**
   - Click "Select a project" → "New Project"
   - Name: "City Defense Z GDD Automation"
   - Click "Create"

3. **Enable Google Drive API:**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Drive API"
   - Click "Enable"

4. **Create Service Account:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "Service Account"
   - Name: "gdd-automation"
   - Description: "Automates GDD file uploads to Google Drive"
   - Click "Create and Continue"
   - Skip role assignment for now
   - Click "Done"

5. **Generate Service Account Key:**
   - Click on your service account email
   - Go to "Keys" tab
   - Click "Add Key" → "Create New Key"
   - Choose "JSON" format
   - Download the file (keep it secure!)

### 2. Setup Google Drive Folder

1. **Create GDD Folder in Google Drive:**
   - Go to [Google Drive](https://drive.google.com)
   - Create a new folder: "City Defense Z - GDD"
   - Right-click → "Share"
   - Add your service account email (from the JSON file)
   - Give "Editor" permissions

2. **Get Folder ID:**
   - Open the folder in Google Drive
   - Copy the folder ID from the URL:
   ```
   https://drive.google.com/drive/folders/1-JKYLdpP2gyF9CJv_PkC3WOmUw4Gv_eK
   
   ```

### 3. Configure GitHub Secrets

1. **Go to your GitHub repository**
2. **Settings → Secrets and variables → Actions**
3. **Add Repository Secrets:**

   **GOOGLE_SERVICE_ACCOUNT:**
   ```json
   {
     "type": "service_account",
     "project_id": "your-project-id",
     "private_key_id": "...",
     "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
     "client_email": "gdd-automation@your-project.iam.gserviceaccount.com",
     "client_id": "...",
     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
     "token_uri": "https://oauth2.googleapis.com/token",
     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
     "client_x509_cert_url": "..."
   }
   ```

   **GOOGLE_DRIVE_FOLDER_ID:**
   ```
   1ABC2DEF3GHI4JKL5MNO6PQR7STU8VWX9YZ
   ```

### 4. Create DOCX Template (Optional)

Create `gdd-template.docx` in your repository root for consistent formatting:

1. **Create a Word document with your preferred styling:**
   - Title styles (Heading 1, 2, 3)
   - Body text formatting
   - Page margins and layout
   - Color scheme

2. **Save as `gdd-template.docx`** in your repository root

## 📝 Usage

### Automatic Sync (GitHub Actions)
- **Push any .md file changes** to main/master branch
- **GitHub Actions will automatically:**
  - Convert MD files to DOCX
  - Upload to your Google Drive folder
  - Create a GitHub release with version info

### Manual Local Sync
```bash
# Install dependencies
npm install

# Convert markdown to DOCX
npm run convert

# Upload to Google Drive (requires .env file)
npm run sync

# Do both in one command
npm run full-sync
```

### Local Environment Setup
Create `.env` file in your project root:
```env
GOOGLE_SERVICE_ACCOUNT={"type":"service_account",...}
GOOGLE_DRIVE_FOLDER_ID=your_folder_id_here
```

## 🔍 Monitoring & Troubleshooting

### Check GitHub Actions
- Go to "Actions" tab in your GitHub repository
- View workflow runs and logs
- Check for any error messages

### Google Drive Verification
- Check your Google Drive folder for updated files
- Look for sync report JSON files with timestamps

### Common Issues

**❌ "Authentication failed"**
- Verify service account JSON is correct in GitHub secrets
- Ensure service account has access to the Google Drive folder

**❌ "File not found"**
- Check that your .md files are in the repository root
- Verify file names match the script configuration

**❌ "Pandoc command not found"**
- Install Pandoc: `sudo apt-get install pandoc` (Linux/WSL)
- Or download from: https://pandoc.org/installing.html

## 🎯 Benefits

✅ **Automatic conversion** from Markdown to professional DOCX format
✅ **Real-time sync** to Google Drive on every commit
✅ **Version control** for both source (MD) and output (DOCX) files
✅ **Team collaboration** through shared Google Drive folder
✅ **Professional formatting** with customizable Word templates
✅ **Workflow tracking** through GitHub Actions and sync reports

## 🔧 Customization

### Add More File Types
Edit `scripts/upload-to-gdrive.js` to include additional files:
```javascript
const files = [
  { name: 'City_Defense_Z_Complete_GDD.docx', path: './City_Defense_Z_Complete_GDD.docx' },
  { name: 'City_Defense_Z_Complete_GDD_Skeleton.docx', path: './City_Defense_Z_Complete_GDD_Skeleton.docx' },
  { name: 'Additional_Document.docx', path: './Additional_Document.docx' }
];
```

### Modify Conversion Options
Edit pandoc commands in `package.json` or `.github/workflows/sync-to-gdrive.yml`:
```bash
pandoc input.md \
  --from markdown \
  --to docx \
  --output output.docx \
  --reference-doc=custom-template.docx \
  --toc \
  --toc-depth=4 \
  --highlight-style=tango
```

## 🎉 You're All Set!

Your automated GDD workflow is now ready! Edit your markdown files in Cursor, commit changes, and watch them automatically appear as formatted DOCX files in Google Drive. 