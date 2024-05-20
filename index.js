const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.PORT);


// Define a route handler for the root URL
app.get('/api', (req, res) => {
  console.log("im calling fucke")
  res.send('Hello, World! I am Sril ');
});


const port = process.env.PORT || 3000; 


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});






// build docker image : docker build -t node-app-image .
// show all images : docker images
// run docker container : docker run  -v %cd%:/app -p 4000:3000 -d --name node-app-container node-app-image 
//  remove running comand : docker rm node-app-container- -f 
//  commanding on running container : docker exec -it node-app-container- bash 


// docker compose : docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build