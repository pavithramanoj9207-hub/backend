//install mongoose package using npm i mongoose
//import mongoose package
var mongoose=require("mongoose");
//connect to the database
//mongoose.connect("url").then(()=>{}).catch((err)=>{console.log(err)})
mongoose
     .connect("mongodb+srv://pavithramanoj9207_db_user:pavithra@cluster0.u8ghenz.mongodb.net/shortterm?appName=Cluster0")
     .then(()=>{
        console.log("db connected succesfully");
     })
     .catch((err)=>{console.log(err)})