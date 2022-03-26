import {Router} from 'express';
import { signUpSchema } from './schema';
import { validation } from '../../shared/middleware/validation';

export const userRouteHandler=()=>{
    const app=Router();
    app.post('/signUp',validation(signUpSchema),userSignUpHandel);
}

const userSignUpHandel=async (req,res)=>{
    try{
       // await handelSignUp(req.body);
        res.json({status: true,msg: "successfully Added"});
    }catch(error)
    {
       console.log(error)
       res.json({status: false,msg: error.msg});
    }
}