import React from 'react'
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { validate } from 'uuid';
import Footer from '../components/Footer';
import UseFecth from '../Hooks/UseFecth';
import avatar from "../img/astronaut.svg"
// import reg from "../img/register/register.png";
const Register = () => {
    const { registerUser } = UseFecth()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div className='h-screen w-screen grid grid-rows-6 grid-cols-none bg-fondo font-mono text-lg relative'>
            <img src={avatar} alt="" className="absolute  z-0 animate-infinity hidden lg:block lg:top-1/4  lg:right-3/4" />
            <div className="row-span-1">
                <div className="w-full h-16 bg-black px-16 sm:px-0 sm:text-center text-gray-400 font-extrabold font-serif text-3xl ">
                    <h1 className="md:py-4">ShortCutUrl</h1>
                </div>
            </div>
            <div className='row-span-4 w-full flex flex-col justify-center items-center'>
                <div className=' w-auto sm:w-96 h-auto  p-3 rounded-3xl bg-gradient-to-br from-[#30c5d2] to-[#471069] text-white font-extrabold'>
                    <div className='flex flex-col items-center '>
                        {/* <img src={reg} alt="user-login" className='bg-cover w-32 rounded-full border-2 border-white p-4' /> */}
                        <p className='py-1 text-xl '>Registro</p>
                    </div>
                    <form onSubmit={handleSubmit((data) => registerUser(data))} className='h-96 flex flex-col justify-around text-white'>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id='name' {...register("nombre", { required: "Nombre requerido." })} placeholder='Nombre' className='bg-transparent border-l-2  border-white focus:border-l-0 focus:ease-out focus:duration-100  placeholder:text-white outline-none  focus:border-b-4 px-5' />
                        <p className='text-xs text-black font-mono'>{errors?.nombre?.message}</p>

                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' {...register("email", { required: "Email Requerido." })} placeholder='Email' className='bg-transparent border-l-2  border-white focus:border-l-0 focus:ease-out focus:duration-100  placeholder:text-white outline-none  focus:border-b-4 px-5' />
                        <p className='text-xs text-black font-mono'>{errors?.email?.message}</p>

                        <label htmlFor="password">Contraseña</label>
                        <input type="text" {...register("password", { required: "Password Requerido.", minLength: { value: "6", message: "Minimo de caracteres 8" } })} id='password' placeholder='Cotraseña' className='bg-transparent border-l-2 border-white focus:border-l-0 focus:ease-out focus:duration-100  placeholder:text-white outline-none  focus:border-b-4 px-5' />
                        <p className='text-xs text-black font-mono'>{errors?.password?.message}</p>

                        <label htmlFor="repassword">Repita la Contraseña</label>
                        <input type="text" {...register("repassword", { validate: { validar: value => value === watch("password") || "Los Password no coinciden." }, required: "Repita Password.", minLength: { value: "6", message: "Minimo de caracteres 8" } })} id='repassword' placeholder='Repita la Cotraseña' className='bg-transparent border-l-2 border-white focus:border-l-0 focus:ease-out focus:duration-100  placeholder:text-white outline-none  focus:border-b-4 px-5' />
                        <p className='text-xs text-black font-mono'>{errors?.repassword?.message}</p>

                        <button type='submit' className='bg-white text-black self-center p-1 rounded-xl active:scale-105 active:ease-linear active:duration-100 px-3' >Registrarse!</button>
                    </form>
                </div>
                <p className='text-sm text-center py-2' >Ya tienes una cuenta! <Link to="/login" className='text-sky-900'>¡ Login !</Link></p>
            </div>
            {
                <Toaster />
            }
            <div className='row-span-2 flex self-end'>
                <Footer />
            </div>

        </div >
    )
}

export default Register