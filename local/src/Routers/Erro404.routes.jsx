import React from 'react'
import { NavLink } from 'react-router-dom'
import error404 from "../img/error404.svg"
const Erro404 = () => {
    return (
        <div className='w-screen h-screen relative'>
            <img src={error404} className="w-full h-full absolute z-0" alt="" />
            <div className='w-full flex flex-col text-center'>
                <h1 className='font-extrabold text-2xl z-10 py-5'>Error No se encontro la pagina..</h1>
                <NavLink to="login" className=" mx-auto z-20 w-32 text-center border border-black bg-sky-500  rounded-lg active:scale-105 font-extrabold">Login</NavLink>

            </div>
        </div >
    )
}

export default Erro404