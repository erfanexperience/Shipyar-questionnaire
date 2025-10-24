@echo off
echo Starting Shippyar Questionnaire Backend...
echo.

echo Installing dependencies...
npm install

echo.
echo Setting up database...
node setup-database.js

echo.
echo Starting server...
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

npm start

pause
