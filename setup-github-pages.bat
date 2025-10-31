@echo off
echo ========================================
echo Setting up GitHub Pages for shippyar.com/early
echo ========================================
echo.

REM Create early folder if it doesn't exist
if not exist "early" mkdir early
echo ✅ Created 'early' folder

REM Copy frontend files to early folder
echo Copying files to early folder...
copy /Y index.html early\ >nul 2>&1
copy /Y styles.css early\ >nul 2>&1
copy /Y script.js early\ >nul 2>&1
copy /Y Logo-v2.png early\ >nul 2>&1
copy /Y wall.png early\ >nul 2>&1
echo ✅ Copied frontend files to early folder

echo.
echo ========================================
echo Setup complete!
echo ========================================
echo.
echo Next steps:
echo 1. Review GODADDY_DNS_SETUP.md for DNS configuration
echo 2. Commit and push to GitHub:
echo    git add .
echo    git commit -m "Setup for shippyar.com/early"
echo    git push origin main
echo 3. Enable GitHub Pages in repository settings
echo 4. Configure DNS in GoDaddy
echo.
pause

