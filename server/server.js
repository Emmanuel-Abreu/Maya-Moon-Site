const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.get("/", function(req, res)
  {
    res.sendFile(__dirname + "/index.html");
  }); 

app.post("/", function(req, res)
  {

    
  });

app.listen(3000, function()
  {
    console.log("Server started on port 3000.");
  });

