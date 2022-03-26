import {Router} from "express";
import {homePageRoute} from './homepage/route.js'
import { userRouteHandler } from "./User/route.js";

export default () => {
    const app=Router();
    app.use("/",homePageRoute())
    app.use("/user/",userRouteHandler());
    return app;
}