import React from 'react'
import linkedin from "../icon/linkedin.png"
import porfolio from "../icon/portfolio.png"
import avatar from "../icon/avatar.png"
const Footer = () => {
    return (
        <div className='w-screen h-16 bg-black text-white justify-center flex items-end '>
            <a href='https://www.linkedin.com/in/cristianalbornozz/' target="_blank" className='mx-5'><img src={linkedin} alt="" className='w-7 mx-auto' /><i className='text-xs'>LinkdIn</i></a>
            <a href='https://ema9948.github.io/porfolio/' target="_blank" className='mx-5'><img src={porfolio} alt="" className='w-8 mx-auto' /><i className='text-xs'>Porfolio</i></a>
            <div className='mx-1'><img src={avatar} alt="" className='w-7 mx-auto' /><i className='text-xs'>ema994@gmail.com</i></div>
        </div>
    )
}

export default Footer