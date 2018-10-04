const express = require('express');
const router = express.Router();

router.get("/system",function(req,res){
    res.send("hello System");
});

module.exports = router;