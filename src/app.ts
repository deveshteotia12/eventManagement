import express from 'express';

const app=express();

app.get("/",(req,res)=>{
    res.send("HII");
})

app.listen(5000,()=>{
    console.log("listening");
})