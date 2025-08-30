# 🚀 GitHub Setup Guide for TREDD Website

## Step-by-Step Instructions

### 1. Restart Your Computer
After installing Git, restart your computer to ensure Git is properly recognized by your system.

### 2. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `tredd-website`
5. Make it **Public** (so GitHub Pages can work)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### 3. Open Command Prompt/PowerShell
1. Press `Windows + R`
2. Type `cmd` or `powershell` and press Enter
3. Navigate to your website folder:
   ```
   cd C:\Users\rurub\tredd-website
   ```

### 4. Run Git Commands
Copy and paste these commands one by one:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: TREDD website with modern design and carousel"

# Add GitHub remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/TheKoolAidManw/tredd-website

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch
6. Click "Save"
7. Your website will be available at: `https://YOUR_USERNAME.github.io/tredd-website`

## Alternative: Use GitHub Desktop

If you prefer a graphical interface:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click "Clone a repository from the Internet"
4. Select your `tredd-website` repository
5. Choose a local path
6. Copy your website files to the cloned folder
7. Commit and push through GitHub Desktop

## Troubleshooting

### Git not recognized
- Restart your computer after Git installation
- Or use the full path: `C:\Program Files\Git\bin\git.exe`

### Authentication issues
- Use GitHub Personal Access Token instead of password
- Or use GitHub Desktop for easier authentication

### Repository already exists
- Delete the repository on GitHub and create a new one
- Or use a different name like `tredd-website-v2`

## Your Website URL
Once deployed, your website will be live at:
`https://YOUR_USERNAME.github.io/tredd-website`

## Need Help?
- Check GitHub's documentation: https://docs.github.com/
- Contact GitHub support if you have account issues
- The TREDD team can help with website-specific questions

---

**Good luck with your deployment! 🎉**
