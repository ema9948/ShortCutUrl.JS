import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../DB/configDb.js";
import User from "./UserModells.js";

const Url = sequelize.define("url", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: { msg: "Ingrese un post" }
        }
    },
    urlShortCut: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: { msg: "ShortCutUrlcampo requerido" }
        }
    }
})


export default Url;