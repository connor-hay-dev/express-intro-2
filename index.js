// console.log("hey everyone, server WIP...");
//import the server package
const express = require('express');

// make an instance of the server that we can customise and run
const app = express();

const HOST = process.env.HOST || "localhost"
const PORT = process.env.PORT || 3000;
// ports run in intergers between 1001 - 65536

// write the routes
// GET localhost:3000/
// app.get(route path, callback function to handle request and response)

app.get("/", (request, response) => {
    response.send("Hello World, server building in progress")

})

// Configure the server

// Activate the server
app.listen(PORT, HOST,()=> {
    console.log(`Server is running on port ${PORT}`);
})
