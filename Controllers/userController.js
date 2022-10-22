import { json, Op } from "sequelize";
import Post from "../models/PostModell.js";
import User from "../models/UserModells.js";

export const Login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ where: { email } })
        if (user === null) return res.status(404).json({ msg: "El Email no esta asociado a ninguna cuenta" })

        if (!user.compare(password)) return res.status(404).json({ msg: "Verifique las credenciales" })

        // if (!user.verificado) return res.status(404).json({ msg: "Falta verificar la cuenta" })
        // console.log(user)

        res.status(200).json(user)
    } catch (err) {
        //*para ver errores
        return res.sendStatus(500)
    }

}


export const Register = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        return res.sendStatus(201)
    } catch (error) {
        //*para ver errores
        return res.status(404).json({ msg: error.errors[0].message })
    }
}

export const AccounVerify = async (req, res) => {
    const { id } = req.params;
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
