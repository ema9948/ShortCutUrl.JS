import useBcrypt from "sequelize-bcrypt"
import { DataTypes } from "sequelize";
import sequelize from "../DB/configDb.js";
import Url from "./UrlModells.js";

const User =  sequelize.define("User",{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING,
        validate: {
            isEmail: { msg: "Ingrese un Email valido" }
        }

    },
    password:{
        type:DataTypes.STRING,
        validate: {
            notEmpty: { msg: "Ingrese una contraseña" },
            len: { args: [3, 20], msg: "minomo 3 caracters y maximo 20" }
        }
    },
    verificado:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

useBcrypt(User, {
    field: 'password', // secret field to hash, default: 'password'
    rounds: 10, // used to generate bcrypt salt, default: 12
    compare: "auth"// method used to compare secrets, default: 'authenticate'
})

User.hasMany(Url, {
    foreignKey: "user_id"
});


export default User;