import { Sequelize,DataTypes } from "sequelize";
import sequelize from "../DB/configDb.js";


const User =  sequelize.define("User",{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email:{
        type:DataTypes.STRING,
        allowNull: true
    },
    password:{
        type:DataTypes.STRING,
    },
    verificado:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

export const Post =  sequelize.define("User",{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    post:{
        type:DataTypes.STRING,
        allowNull:true
    },
    userID:{
        type:DataTypes.UUID,
        allowNull:true
    }
})

//!sequilize agragar frkey automaticamente.
//*OneToOne
User.hasOne(Post);
Post.belongsTo(User)

//?verifi models
// console.log(User === sequelize.models.User);
User.sync();
Post.sync();

export default User;