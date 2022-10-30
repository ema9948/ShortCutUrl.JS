import "dotenv/config"
import express from "express";
import sequelize from "./DB/configDb.js";
import User from "./models/UserModells.js";
import Url from "./models/UrlModells.js";
import userRoute from "./Routes/user.Router.js";
import urlRouter from "./Routes/url.Router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


app.use(cors({ origin: process.env.FRONTURL, credentials: true, allowedHeaders: "Authorization" }))
app.use(express.json())
app.use(cookieParser());

try {
    if (process.env.DEV) {
        await sequelize.authenticate()
    }
    await User.sync();
    await Url.sync();
} catch (error) {
    // console.log(error?.original?.code + "(Sequilize)");
};

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use("/api/v1/user", userRoute)

app.use("/api/v1/url", urlRouter)


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Server 🚀, PORT : " + PORT));



