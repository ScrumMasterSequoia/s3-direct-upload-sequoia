import express from 'express'
import { generateUploadURL } from './s3.js'

const app = express()

app.use(express.static('front'))

app.get('/s3Url', async (req, res) => {

  // added from here
// readFile('./front/index.html', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })
// to here

  const url = await generateUploadURL()
  res.send({url})
})

app.listen(8080, () => console.log("listening at http://localhost:8080"))