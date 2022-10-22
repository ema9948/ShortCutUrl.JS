import { Router } from "express";
import { AccounVerify, Login, Register } from "../Controllers/userController.js";
const userRoute = Router();

userRoute.post("/login",Login)
userRoute.post("/register",Register)
userRoute.get("/:id", AccounVerify)


export default userRoute;