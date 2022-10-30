import { Router } from "express";
import { AccounVerify, Login, logOut, Register } from "../Controllers/userController.js";
const userRoute = Router();

userRoute.post("/login",Login)
userRoute.post("/register",Register)
userRoute.get("/logout", logOut)
userRoute.get("/verify/:token", AccounVerify)


export default userRoute;