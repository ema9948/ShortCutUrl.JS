import express from "express";
import "dotenv/config"
import "./DB/configDb.js";
import "./models/UserModells.js";
import userRoute from "./Routes/user.Router.js";
import cors from "cors";


const app = express();
app.use(express.json())

app.use("/api/v1",userRoute)




const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Server 🚀, PORT : " + PORT));



