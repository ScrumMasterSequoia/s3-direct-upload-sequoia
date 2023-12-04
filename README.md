Demo app intended to practice uploading and viewing images via browser to aws s3

$ sudo ln -s /folder/installed/aws-cli/aws /usr/local/bin/aws
sudo ln -s /folder/installed/aws-cli/aws_completer /usr/local/bin/aws_completer
Password:
ln: /usr/local/bin/aws: File exists
ln: /usr/local/bin/aws_completer: File exists
$ which aws
aws --version
/usr/local/bin/aws
aws-cli/2.13.39 Python/3.11.6 Darwin/21.6.0 exe/x86_64 prompt/off

$ npm init

$ cd back
$npm run start
    *err    
npm install express
$npm run start
    listening on port 8080


$ npm install aws-sdk

$ npm install dotenv

to escape from running port, press "control+c"


// if we want to try to switch to aws-sdk v3. I have undone these steps.. kind of 
$  npx aws-sdk-js-codemod -t v2-to-v3 s3.js

Need to install the following packages:
aws-sdk-js-codemod@0.28.2
Ok to proceed? (y) y
rerun the above line afterwards


trying to use
$ npm install aws-sdk/client-s3
but I may have the wrong version of aws-sdk (2.something installed) yet I have tried to refactor my imports because of the depricated warning associated with v2. to roll back, use the initial commit in github, which has the v2 version.

while trying to use s3 bucket static hosting, I deleted the node_modules folder from the back/ folder