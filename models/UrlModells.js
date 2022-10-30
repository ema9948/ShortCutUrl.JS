import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../DB/configDb.js";

const Url = sequelize.define("url", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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