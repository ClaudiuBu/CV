const express = require("express");
var app = express();

port = 3000;
app.use(express.static(__dirname + '/'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.listen(port,function(err){
    console.log("Server started on port 3000");
    if(err)console.log(err);
})