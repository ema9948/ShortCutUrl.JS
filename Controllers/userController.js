import jwt from "jsonwebtoken";
import User from "../models/UserModells.js";
import { jwtGenerate } from "../utils/jwtMangener.js";
import { transporter } from "../utils/sendEmail.js";

export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await User.findOne({ where: { email } })
        if (user == null) return res.status(404).json({ msg: "El Email no esta asociado a ninguna cuenta" })

        if (!user.auth(password)) return res.status(404).json({ msg: "Verifique las credenciales" })

        if (!user.verificado) return res.status(401).json({ msg: "Falta verificar la cuenta" })

        const token = jwtGenerate(user.id, res);



        //?sin token, con cookies
        return res.status(200).json({ nombre: user.nombre, token: token });

    } catch (error) {
        return res.sendStatus(500)
    }

}


export const Register = async (req, res) => {

    const { nombre, email, password } = req.body;

    try {
        let user = await User.findOne({ where: { email } })
        if (user !== null) return res.status(401).json({ "content": "Email en uso." })
        user = await User.create({ nombre, email, password });

        const token = jwtGenerate(user.id, res);
        const html = `
        <b>Haz Click para confirmar el email</b>
        <a href="${process.env.FRONTURL}/verify/${token}">Verificar</a>`;

        await transporter.sendMail({
            from: '"App" <confirm@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            html: html, // html body
        });


        return res.status(201).json({ token: token });

    } catch (error) {
        //*para ver errores
        return res.status(500).json({ msg: error?.errors[0].message })
    }
}

export const AccounVerify = async (req, res) => {
    const { token } = req.params;

    const { uid: id } = jwt.verify(token, process.env.JWTSECRET);
    try {
        const user = await User.findOne({ where: { id } });
        if (!user) return res.status(404).json({ msg: "Error ID" });
        user.verificado = true;
        await user.save();
        return res.sendStatus(200)
    } catch (error) {
        return res.sendStatus(500)
    }
}

export const logOut = (req, res) => {
    res.clearCookie("Token");
    return res.sendStatus(200)
}