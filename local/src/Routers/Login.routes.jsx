import { Link, Navigate } from "react-router-dom"
import avatar from "../img/astronaut.svg"
import avatarBg from "../img/fondo.svg"
import Footer from "../components/Footer"
import { useForm } from "react-hook-form"
import UseFecth from "../Hooks/UseFecth"
import { useContext } from "react"
import { appContext } from "../components/UserProvider"
import { Toaster } from "react-hot-toast"
const Login = () => {
    const { user } = useContext(appContext);

    const { userLogin, loading } = UseFecth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    if (loading) {
        return <Navigate to="/" />
    }

    return (
        <div className='h-screen w-screen grid grid-rows-6  grid-cols-2 lg:grid-cols-3  bg-gradient-to-tr from-[#0e1c26] to-[#294861] font-mono text-lg relative overflow-hidden'>
            <img src={avatarBg} alt="" className="absolute scale-150 lg:scale-100 md:-top-80  z-0 " />
            <div className="row-span-1 col-span-2 lg:row-span-1 lg:col-span-3">
                <div className="w-full h-16 bg-black px-16 sm:px-0 sm:text-center text-gray-400 font-extrabold font-serif text-3xl ">
                    <h1 className="md:py-4">ShortCutUrl</h1>
                </div>
            </div>
            <div className=" hidden lg:block lg:row-span-4 lg:col-span-1 relative ">
                <img src={avatar} alt="" className="absolute  z-10 animate-infinity " />
            </div>
            <div className='row-span-4 col-span-2 lg:row-span-4 lg:col-span-2 w-full flex justify-center items-center relative'>
                <div className='  w-auto sm:w-96 h-96  p-3 rounded-3xl border-2 border-gray-400 bg-gradient-to-bl from-[#e4e7e4] to-[#0a1647]  text-white font-extrabold'>
                    <div className='flex flex-col items-center '>
                        <p className='py-1 text-3xl '>Login</p>
                    </div>
                    <form onSubmit={handleSubmit((data) => userLogin(data))} className='h-48 flex flex-col justify-around text-white'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' {...register("email", { required: { message: "Campo requerido." } })} placeholder='Email' className='bg-transparent border-l-2  border-white focus:border-l-0 focus:ease-out focus:duration-100  placeholder:text-white outline-none  focus:border-b-4 px-5' />
                        <i className='text-sm'>{errors?.email?.message}</i>
                        <label htmlFor="pass">Contraseña</label>
                        <input type="password" id='pass'{...register("password", { required: "Campo requerido.", minLength: { value: 4, message: "Campo Incompleto." } })} placeholder='Cotraseña' className='bg-transparent border-l-2 border-white focus:border-l-0 focus:ease-out focus:duration-100  placeholder:text-white outline-none  focus:border-b-4 px-5' />
                        <i className='text-sm'>{errors?.password?.message}</i>
                        <button type='submit' className='bg-white text-black w-32 self-center p-1 rounded-xl active:scale-105 active:ease-linear active:duration-100' >Login</button>
                    </form>
                    <p className='text-sm text-center py-5 text-black' >Aun no tienes cuenta? <Link to="/register" className=' text-white'>Registrate!</Link></p>
                </div>
            </div>
            {
                <Toaster />
            }
            <div className='row-span-2  col-span-3 flex self-end relative z-20'>
                <Footer />
            </div>
        </div >
    )
}

export default Login