import { Router } from "express";
import { addUrl, allUrls, deleteUrl, editUrl } from "../Controllers/urlControllers.js";
import { jwtVefiryMiddleware } from "../middlewares/jwtVerify.js";

const urlRouter = Router();


urlRouter.get("/allUrl/:uid", jwtVefiryMiddleware, allUrls);
urlRouter.post("/add", jwtVefiryMiddleware, addUrl);
urlRouter.patch("/edit/:id", jwtVefiryMiddleware, editUrl);
urlRouter.delete("/:id", jwtVefiryMiddleware, deleteUrl);


export default urlRouter;
