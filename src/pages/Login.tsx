import React from 'react'
import logo from '../assets/peeso.png'
const Login = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex font-sans'>
        <div className='w-1/2 h-full bg-peesoGreen flex items-center justify-center flex-col'>
            <img src={logo} alt="Peeso" className='h-[250px] w-[250px]' />
            <h1 className='text-white text-[35px] font-bold px-24 mt-10 text-center'>PEESO DATA MANAGEMENT SYSTEM PORTAL</h1>
        </div>
        <div className='w-1/2 h-full bg-peesoOffWhite flex flex-col items-center justify-center'>
            <h2 className='font-semibold text-[20px]'>WELCOME</h2>
            <div className='flex flex-col w-1/2 mt-16'>
                <p className='text-base font-semibold mb-4'>USER ID</p>
                <input className='bg-transparent border-b-2 outline-none border-b-black hover:border-b-2 hover:border-b-peesoGreen focus:border-b-peesoGreen' type="text" name="userId" id="userId" />
            </div>
            <div className='flex flex-col w-1/2 mt-16'>
                <p className='text-base font-semibold mb-4'>PASSWORD</p>
                <input className='bg-transparent border-b-2 outline-none border-b-black hover:border-b-2 hover:border-b-peesoGreen focus:border-b-peesoGreen' type="text" name="userId" id="userId" />
            </div>
            <button className='text-base font-bold mt-10 outline-lime-800 bg-peesoGreen h-11 rounded w-1/2 text-peesoOffWhite'>LOGIN</button>
        </div>
    </div>
  )
}

export default Login