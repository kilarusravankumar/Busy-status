var express=require("express");// using express module.
var app=express();
var mongoose=require('mongoose');

app.use('/',express.static(__dirname+'/public'));
app.get('/',function(req,res){
  res.sendFile(__dirname+"/Public/index.html");
});


var server=app.listen(8080,function(){
  console.log("server is running on 8080");
})
