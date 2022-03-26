import { Router } from "express"; 

export const homePageRoute=()=>{
     const app=Router();
     app.get("/",handelGet);
     return app;
}

const handelGet=(req,res)=>{
    res.json({success: true, msg: "Got the respose"})
}

