import jwt from "jsonwebtoken";

export const jwtVefiryMiddleware = (req, res, next) => {
    const auth = req?.headers?.authorization;
    const token = auth.split(" ")[1];

    // const token = req.cookies.Token


    try {
        const verify = jwt.verify(token, process.env.JWTSECRET);
        req.uid = verify?.uid
        next();
    } catch (error) {
        // console.log(error);
        return res.status(401).json({ "error": error?.message });
    }

}