import * as yup from 'yup';

export const signUpSchema=new yup.ObjectSchema({
    email: yup.string().email(),
    name: yup.string(),
    ID: yup.string()
})