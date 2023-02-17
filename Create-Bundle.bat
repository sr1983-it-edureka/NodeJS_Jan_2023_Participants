set BUNDLE_NAME=NodeJS_Jan_2023_Participants-Day-09.7z



7z a -t7z %BUNDLE_NAME% -x!.git -x!_Environments -x!Basics\chalk-demo\node_modules -x!Basics\environment-demo\node_modules -x!Basics\yargs-demo\software-manager-cla\node_modules -x!Express\app-mvc-usage\node_modules -x!Express\express-demo\node_modules -x!MongoDB\mongo-db-demo\node_modules  -x!Security\security-app\node_modules  .\*
