import express from 'express'
import { listImagesFromS3, generateUploadURL } from './s3.js'   
import cors from 'cors'

const app = express()

app.use(express.static('../front'))

app.get('/s3Url', async (req, res) => {
  try {
    const url = await generateUploadURL();
    res.send({url});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating the S3 URL');
  }
});

// app.listen(8080, () => console.log("listening at http://localhost:8080"))



const port = 8080;


// server.js

const bucketName = "practice-upload-bucket-sequoia";

// Enable CORS for client-side, if necessary
app.use(cors());

// Define an endpoint to handle the image listing
app.get('/images', async (req, res) => {
  try {
    const imageUrls = await listImagesFromS3(bucketName);
    res.json(imageUrls);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving images from S3');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
