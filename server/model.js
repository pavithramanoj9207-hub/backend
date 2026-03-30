//import mongoose
var mongoose=require("mongoose")

//create a schema for the data
var userschema = mongoose.Schema({
    name : String,
    place : String,
    age : Number
})

//create a model for the data
var usermodel = mongoose.model("users",userschema);
//export the model to use in other files
module.exports = usermodel;
