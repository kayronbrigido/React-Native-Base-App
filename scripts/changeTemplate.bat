@echo off

echo Change Template
echo Type the Template: 
set /p template=

if exist ./infrastructure/%template% (

  echo Copying files

  robocopy ./infrastructure/%template%/src ./src /E

  echo DONE
) else (
  echo Template %template% not exist
)