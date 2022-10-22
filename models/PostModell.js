import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../DB/configDb.js";
import User from "./UserModells.js";

const Post = sequelize.define("Post", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    post: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: { msg: "Ingrese un post" }
        }
    },
    userId: {
        type: DataTypes.UUID,
        validate: {
            notEmpty: { msg: "Ingrese un id de usuario" }
        }
    }
})


Post.sync()

export default Post;