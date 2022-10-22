import { Sequelize,DataTypes } from "sequelize";
import useBcrypt from "sequelize-bcrypt";
import sequelize from "../DB/configDb.js";
import Post from "./PostModell.js";

const User =  sequelize.define("User",{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email:{
        type:DataTypes.STRING,
        unique: { msg: "El Email ya se encuentra en uso" },
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
    compare: process.env.HASH, // method used to compare secrets, default: 'authenticate'
})


User.hasOne(Post, {
    foreignKey: {
        name: 'userID',
        type: DataTypes.UUID
    }
});
Post.belongsTo(User, {
    foreignKey: {
        name: 'userId',
    }
})

User.sync()

export default User;