const express=require("express");
const app=express();

const dotenv = require("dotenv");
dotenv.config({ path: __dirname+'.env' });
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://seproject65:1234567890@cluster0.5jqnuxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db=mongoose.connection;
db.on("error",(error)=> console.log(error));
db.once("open",()=>console.log("connected to database"));




app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));

const cors=require("cors");
app.use(cors());



app.all("/*",(req,res)=>{
    return res.status(404).json({message:"Page not found"});
});

//port listening at in the server
app.listen(3002, ()=>{
    console.log("running on port " + 3002);
});
