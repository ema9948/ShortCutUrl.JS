import { Router } from "express";
import { addUrl, allUrls, deleteUrl, editUrl } from "../Controllers/urlControllers.js";
import { jwtVefiryMiddleware } from "../middlewares/jwtVerify.js";

const urlRouter = Router();
//? GET    => AllUrl    => all url
//? POST   => Add       => body add url
//? PATCH  => editURl   => body edit url and urlId params
//? DELTET => deleteUrl => id on params

urlRouter.get("/allUrl", jwtVefiryMiddleware, allUrls);
urlRouter.post("/add", jwtVefiryMiddleware, addUrl);
urlRouter.patch("/edit/:id", jwtVefiryMiddleware, editUrl);
urlRouter.delete("/:id", jwtVefiryMiddleware, deleteUrl);


export default urlRouter;
