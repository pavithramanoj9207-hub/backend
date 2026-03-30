//1.npm init
//2. npm i  express=>for installing express tge framework
//3.import express from "express";=>for importing express\
var express=require("express");
//4.create an instance of express
var app=express();
//5.assign a port number to the server
var port=3000;
//middleware

//API
//app.get("path",callback function(req,res){})=>
// for creating an API endpoint
app.get('/',(req,res)=>{
    res.send("welcome to my server");
})
app.get('/l',(req,res)=>{
    res.send(" login page");
})
//6.start the server and listen on the specified port
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})