import React, { useContext } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import UseFecth from '../Hooks/UseFecth';
import { appContext } from './UserProvider'

const Navbar = () => {
    const { setUser, user } = useContext(appContext);
    const { logOut } = UseFecth()

    const handlerClick = () => {
        logOut()
        localStorage.clear()
        return setUser({})
    }
    return (
        <div className='flex justify-around items-center bg-black text-white font-mono text-sm lg:text-xl h-10'>
            <h2 className='hidden lg:block'>{user?.nombre.toUpperCase()}</h2>
            <h1 >ShortCutUrl by:<a href='https://ema9948.github.io/porfolio/' className='text-sky-500'>Chirix</a> </h1>
            <button className=" border border-white px-1 rounded-lg active:scale-105" onClick={handlerClick}>Cerrar Sesion</button>
        </div>
    )
}

export default Navbar