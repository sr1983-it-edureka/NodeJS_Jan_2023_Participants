set BUNDLE_NAME=NodeJS_Jan_2023_Participants-Day-12.7z



7z a -t7z %BUNDLE_NAME% -x!.git -x!_Environments -x!Basics\chalk-demo\node_modules -x!Basics\environment-demo\node_modules -x!Basics\yargs-demo\software-manager-cla\node_modules -x!Express\app-mvc-usage\node_modules -x!Express\express-demo\node_modules -x!MongoDB\mongo-db-demo\node_modules  -x!Security\security-app\node_modules -x!Testing\Unit-Testing-Demo\node_modules -x!Testing\course-app\node_modules -x!Testing\mochai-chai-usage\node_modules -x!Babel-Usage\node_modules -x!EJS-Usage\node_modules  .\*
