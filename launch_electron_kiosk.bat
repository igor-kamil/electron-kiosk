@echo off

REM Step 1: Terminate Explorer Shell
taskkill /f /im explorer.exe

REM Step 2: Launch Electron Kiosk
set "ProgramsPath=%LOCALAPPDATA%\Programs"
start "" "%ProgramsPath%\electron-kiosk\electron-kiosk.exe"