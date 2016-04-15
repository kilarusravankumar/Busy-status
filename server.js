var express=require("express");// using express module.
var app=express();
app.get('/',function(req,res){
  res.send("hello world")
})

var server=app.listen(8080,function(){
  console.log("server is running on 8080");
})
