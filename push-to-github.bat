@echo off
echo ========================================
echo Pushing TREDD Website to GitHub
echo ========================================
echo.

echo IMPORTANT: Make sure you have created a GitHub repository first!
echo.
echo 1. Go to https://github.com
echo 2. Click "New repository"
echo 3. Name it: tredd-website
echo 4. Make it PUBLIC
echo 5. Don't initialize with README
echo 6. Copy the repository URL
echo.

set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/username/tredd-website.git): "

echo.
echo Adding remote origin...
"C:\Program Files\Git\bin\git.exe" remote add origin %REPO_URL%

echo.
echo Setting main branch...
"C:\Program Files\Git\bin\git.exe" branch -M main

echo.
echo Pushing to GitHub...
"C:\Program Files\Git\bin\git.exe" push -u origin main

echo.
echo ========================================
echo If successful, your website is now on GitHub!
echo Next: Enable GitHub Pages in repository settings
echo ========================================
pause
