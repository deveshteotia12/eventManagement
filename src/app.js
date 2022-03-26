import express from "express";
//import config from "./config/index";
import cors from "cors";
import route from './api/index.js'


const startServer=()=>{
    const app=express();
    app.use(cors());
    app.use(express.json());
    app.use("/",route())


    app.listen(5000,()=>{
        console.log("Running")
    })
}

startServer();