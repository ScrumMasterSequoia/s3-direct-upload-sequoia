const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector("#imageInput")

imageForm.addEventListener("submit", async event => {
  event.preventDefault()
  const file = imageInput.files[0]

  // get secure url from our server 
  const { url } = await fetch("/s3Url").then(res => res.json())
  try {
        // console.log(url)
 
    } catch (error) {
      console.error(error);
      res.status(500).send('failed to get secure url');
    }
  
  // post the image direclty to the s3 bucket
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  })

  const imageUrl = url.split('?')[0]
  console.log(imageUrl)

  // post requst to my server to store any extra data. commented out because I do not want to append a single image after it is loaded anymore
  
  // const img = document.createElement("img")
  // img.src = imageUrl
  // document.body.appendChild(img)
})

document.getElementById('showImages').addEventListener('click', async () => {
  const imagesContainer = document.getElementById('images');
  imagesContainer.innerHTML = '';

  try {
    const response = await fetch('http://localhost:8080/images'); // use the correct server URL
    const imageUrls = await response.json();

    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.className = 'img';
      img.style = "position: relative; align-self: center;"
      img.alt = 'Image from S3 Bucket';
      img.width = 100; // Adjust the size as needed
      imagesContainer.appendChild(img);
      imagesContainer.appendChild(document.createElement('br'));
      //console.log(url)
    });

  } catch (error) {
    console.error('Error fetching images:', error);
  }
});