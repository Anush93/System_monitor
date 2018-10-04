const express = require('express');
const path = require('path');
const index = express();
const port = process.env.port || 3000 ;
const system = require('./routes/system');

index.use(express.static(path.join(__dirname,"public")));

index.get('/system',system);

index.get("/",function(req,res){
    res.send("hello System");
});

index.listen(port, function (){
      console.log("listen to port " + port);
});