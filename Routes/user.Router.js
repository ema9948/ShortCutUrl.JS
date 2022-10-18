import { Router } from "express";
import { Login,Register } from "../Controllers/userController.js";
const userRoute = Router();

userRoute.post("/login",Login)
userRoute.post("/register",Register)


export default userRoute;