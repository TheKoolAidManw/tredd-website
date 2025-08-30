@echo off
echo ========================================
echo TREDD Website - GitHub Deployment Script
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding all files to Git...
git add .

echo.
echo Step 3: Making initial commit...
git commit -m "Initial commit: TREDD website with modern design and carousel"

echo.
echo Step 4: Adding GitHub remote (replace YOUR_USERNAME with your GitHub username)...
echo git remote add origin https://github.com/YOUR_USERNAME/tredd-website.git

echo.
echo Step 5: Pushing to GitHub...
echo git branch -M main
echo git push -u origin main

echo.
echo ========================================
echo IMPORTANT: Before running this script:
echo 1. Make sure Git is installed and available
echo 2. Create a new repository on GitHub named 'tredd-website'
echo 3. Replace YOUR_USERNAME in the remote URL with your actual GitHub username
echo 4. Run this script from the tredd-website directory
echo ========================================
echo.
pause
