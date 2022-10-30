import jwt from "jsonwebtoken";

// export const jwtGenerate = (uid) => {
//     const expiresIn = ((60 * 60) * 24) * 30;
//     const token = jwt.sign({ uid: uid }, process.env.JWTSECRET, { expiresIn: expiresIn });

//     return { token: { token } }
// };

export const jwtGenerate = (uid, res) => {
    const expiresIn = ((60 * 60) * 24) * 30;

    try {
        const token = jwt.sign({ uid: uid }, process.env.JWTSECRET, { expiresIn: expiresIn });
        res.cookie("Token", token, {
            httpOnly: true,
            secure: false,
            // sameSite: "none"

        })
        return token
    } catch (error) {
        console.log(error.message)
    }
};