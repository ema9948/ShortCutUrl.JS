import { Op } from "sequelize";
import User from "../models/UserModells.js";
import { Post } from "../models/UserModells.js";

export const Login = async (req,res)=>{
    const {nombre,password} = req.body;
    console.log(nombre,password)
    //?method 1 sabe 
    // const cris = User.build({nombre:"cristian",apellido:"albornoz"});
    // await cris.save()

    //?method 2 save and build en uno solo metodo 
    // const cris = await User.create({nombre:"cristian2asdasd",apellido:"albornoz2"});
    
    //?actualizacion de un solo parametro
    // cris.nombre = "Good cristian :)"
    // await cris.save()

    //?actualizacion de varios parametros
    // cris.set({nombre:"Emanuel",apellido:"ALBORNOZ"});
    // cris.save();

    //?DESTROY
    // const cris = await User.create({nombre:"cristian2"});
    // await cris.destroy()


    //?buscar all
    // const users = await User.findAll();
    //? buscar all por atributos
    // const users = await User.findAll({attributes:["id","nombre","apellido"]});

    //? WHERE
    // const where = await User.findAll({where:{id:{[Op.eq]:1}}})
    // const where = await User.findAll({where:{[Op.and]:[{id:1 , verificado:false}]}})

    // console.log(JSON.stringify(where))
    // console.log(cris.toJSON())
    // console.log(JSON.stringify(users,null,2))


    // const user = await  User.create({email:"ema9948@gmail.com",password:"123123"});
    
    // const post = await Post.create({})

    
    const user = await User.findOne({where:{email:"ema9948@gmail.com"}});
    console.log(JSON.stringify(user,null,2))
    user.email = "ema@gmial.com";
    user.save()
    console.log(JSON.stringify(user,null,2))
    //!CONSOLE.LOG CUANDO CREAMOS UN MODELO
    // console.log(JSON.stringify(user))

    // const user = await User.findOne({email:"ema9948@gmail.com"});
    // console.log(user.toJSON());

    res.send("login")
}


export const Register = (req,res)=>{
    res.send("register")
}

