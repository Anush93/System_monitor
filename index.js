const express = require('express');
const index = express();
const port = process.env.port || 3000 ;

index.listen(port, function (){
      console.log("listen to port " + port);
});