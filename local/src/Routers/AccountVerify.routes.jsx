import React from 'react'
import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import avatarBg from "../img/astronaut.svg"
import email from "../img/email.svg"
import { url } from '../utils/urlBackEnd'
const AccountVerify = () => {
    const { token } = useParams()
    console.log(token)
    useEffect(() => {
        fetch(`${url}/api/v1/user/verify/${token}`)
    }, [])
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-fondo relative'>

            <div className='w-96 h-96 border border-black rounded-md bg-gray-50 p-5'>
                <img src={email} alt="" className='h-80 w-full' />

                <h1 className='py-2 text-center font-serif'>Cuenta verificada, puede <NavLink to="/login" className="font-extrabold text-sky-600 border-b border-black">Login</NavLink> </h1>
            </div>
        </div>
    )
}

export default AccountVerify