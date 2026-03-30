var express=require("express");
require("./db");
var usermodel = require("./model");
var app = express();
var port = 3001;
app.use(express.json());

//API to post data to the server
//app.post("url",req,res)=>{})
    app.post("/",(req,res)=>{
      try {
        usermodel (req.body).save();
        res.send("data saves sucessfully")
        
      } catch (error) {
        console.log(error)
        
      }
    })
app.get("/",async(req,res)=>{
    try{ 
        const users = await usermodel.find();
        res.send(users);
    }catch (error){
      console.log(error);  
    }
    
})

app.delete("/:id",async(req,res)=>{
    try{
        await usermodel.findByAndDelete(req,URLSearchParams.id);
        res.send("data deleted sucessfully");

    }catch (error) {
        console.log(error);
    }
    
})
app.put("/:id",async(req,res)=>{
    try {
        await usermodel.findByIdAndUpdate(req.params.id,req.body);
        res.send("data updated successsfull");
        
    } catch (error) {
        console.log(error)
    }

        
    }

)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})