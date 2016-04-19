var express=require("express");// using express module.
var app=express();
var mongoose=require('mongoose');//using mongoose as an orm
mongoose.connect('mongodb://localhost/todoDB');// connecting DB


app.use('/',express.static(__dirname+'/public'));

//index html get handler
app.get('/',function(req,res){
  res.sendFile(__dirname+"/Public/index.html");
});

//starting server on port 8080
var server=app.listen(8080,function(){
  console.log("server is running on 8080");
})
