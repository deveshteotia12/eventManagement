import * as yup from 'yup'


export const validation=(schema)=>{
    return async (req,res,next)=>{
        try{
            const data=await schema.validate(req.body)
            req.body=data;
            next();
        }catch(error){
             console.log(error);
             //next(new errorClass('Validation error',403))
        }
    }
}