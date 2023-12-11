import dotenv from 'dotenv'
import aws from 'aws-sdk'
// import crypto from 'crypto'
// import { promisify } from "util"
// const randomBytes = promisify(crypto.randomBytes)

dotenv.config()

const region = "us-east-1"
const bucketName = "practice-upload-bucket-sequoia"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY_ID

// console.log(accessKeyId)
// console.log(secretAccessKey)

const s3 = new aws.S3({
  region,
  apiVersion: 'latest', // added
  credentials: { // added
    accessKeyId,
    secretAccessKey
  },
  signatureVersion: 'v4'
})

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  result += '.png';
  return result;
}

export async function generateUploadURL() {
  const imageName = generateRandomString(20)

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    // Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}




// Define the function to list image objects from S3
export async function listImagesFromS3(bucketName) { // add export here instead of below?
  const params = {
    Bucket: bucketName
  };

  try {
    const s3Objects = await s3.listObjectsV2(params).promise();
    const imageUrls = s3Objects.Contents
      .filter(obj => obj.Key.match(/\.(jpg|jpeg|png|gif)$/i))
      .map(obj => {
        // Construct the image URL for public access
        return `https://${bucketName}.s3.amazonaws.com/${obj.Key}`;
      });
    return imageUrls;
  } catch (error) {
    console.error('Error retrieving images from S3:', error);
    throw error;
  }
}

// module.exports = { listImagesFromS3 };