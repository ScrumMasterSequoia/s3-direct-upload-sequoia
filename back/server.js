import express from 'express'
import { generateUploadURL } from './s3.js'

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

app.listen(8080, () => console.log("listening at http://localhost:8080"))