original code repo:     https://github.com/Sam-Meech-Ward/s3-direct-upload
youtube source:     https://www.youtube.com/watch?v=yGYeYJpRWPM

my repo:     https://github.com/ScrumMasterSequoia/s3-direct-upload-sequoia
* I have added more functionality so that the app also has a button you can click to display all images in the bucket.


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


in the back/ folder
$ cd back
$npm run start
    *err    
$ npm install express
$ npm install aws-sdk
$ npm install dotenv
$npm run start
    listening on port 8080

I changed my sever.js file so I could command click on the link to bring me straight to localhost:8080
app.listen(8080, () => console.log("listening at http://localhost:8080"))



to escape from running port, press "control+c"






The source code herein has the line below without the ../ which did not work for me. once I added the ../ it worked, because the index.html file is in the front/ folder, which is not inside the back/ folder, where the server.js is located.

old line
app.use(express.static('front'))

new line
app.use(express.static('../front'))

also for anyone experiencing problems with your .env file, permissions or related stuff:
try console logging your .env variables within s3.js to see if they are the correct string or print as undefined when you pull up localhost:8080
my solution (which isn't always recommended for large projects where the .env variables must be globally accessible) was to move my .env file into my back/ folder so that the dotenv.config() would actually work. When .env was in my root directory and I logged the variables, they came out as undefined instead of strings.