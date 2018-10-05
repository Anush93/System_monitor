const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = express();
const port = process.env.port || 3000 ;
const system = require('./routes/system');

index.use(bodyParser.urlencoded({ extended: false }));
index.use(bodyParser.json());

index.use(express.static(path.join(__dirname,"public")));

index.get('/system',system);

index.get("/",function(req,res){
    res.send("hello System");
});

index.listen(port, function (){
      console.log("listen to port " + port);
});
var cpuStats = require('cpu-stats');
 
// the first argument is how long to sample for in ms.
// longer is more accurate but, you know, longer.
// if omitted, defaults to one second.



setInterval(function() {
    cpuStats(1000, function(error, result) {
        if(error) return console.error('Oh noes!', error) // actually this will never happen
       
        console.info(result[1].cpu);
      });

  }, 1000); 