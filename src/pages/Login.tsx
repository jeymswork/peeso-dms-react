import React, {useContext} from 'react'
import logo from '../assets/peeso.png'
import wave from '../assets/wave-bg.svg'
import axios from 'axios'
import { useState } from 'react'
import Loading from '../components/Loading'
import { LoginContext } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {setAccountDetails} = useContext(LoginContext)

    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [errorVisible, setErrorVisible] = useState(false)

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:3000/employee/login', { employeeId, password});
            localStorage.setItem('token', response.data.token);
            setAccountDetails(response.data.accountDetails)
            navigate('/dashboard')
        } 
        catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response && err.response.status === 400) {
                    setMessage(err.response.data.message || 'Bad Request');
                    setErrorVisible(true)
                    setTimeout(() => {
                        setErrorVisible(false);
                    }, 5000);
                } else {
                    setMessage('An unexpected error occurred.');
                    setErrorVisible(true)
                    setTimeout(() => {
                        setErrorVisible(false);
                    }, 5000);
                }
            }
        }
        finally {
            setLoading(false);
        }
    };

  return (
    <div className='w-screen h-screen overflow-hidden flex font-sans'>
        {loading? <div className='absolute w-screen h-screen z-50'><Loading /></div> : ''}
        <div className='w-1/2 h-full bg-peesoGreen flex items-center justify-center flex-col z-40'>
            <img src={logo} alt="Peeso" className='h-[250px] w-[250px]' />
            <h1 className='text-white text-[35px] font-bold px-24 mt-10 text-center 2xl:px-44'>PEESO DATA MANAGEMENT SYSTEM PORTAL</h1>
        </div>
        <img src={wave} alt="wave" className='absolute h-full overflow-hidden object-contain z-30 right-[45vw]' />
        <div className='w-1/2 h-full bg-peesoOffWhite'>
            <form className='w-full h-full flex flex-col items-center justify-center' onSubmit={handleLogin}>
                <h2 className='font-semibold text-[20px]'>WELCOME</h2>
                <div className='flex flex-col w-1/2 mt-16'>
                    <p className='text-base font-semibold mb-4'>USER ID</p>
                    <input onChange={(e) => setEmployeeId(e.target.value)} className='bg-transparent border-b-2 outline-none border-b-black hover:border-b-2 hover:border-b-peesoGreen focus:border-b-peesoGreen' type="text" name="employeeId" id="employeeId" />
                </div>
                <div className='flex flex-col w-1/2 mt-16'>
                    <p className='text-base font-semibold mb-4'>PASSWORD</p>
                    <input onChange={(e) => setPassword(e.target.value)} className='bg-transparent border-b-2 outline-none border-b-black hover:border-b-2 hover:border-b-peesoGreen focus:border-b-peesoGreen' type="password" name="password" id="password" />
                </div>
                <button type='submit' className='text-base font-bold mt-10 outline-lime-800 bg-peesoGreen h-11 rounded w-1/2 text-peesoOffWhite hover:bg-peesoGreenHover'>LOGIN</button>
                <p className={`text-black ${errorVisible?'visible':'invisible'} font-medium text-peesoRed mt-4`}>{message}</p>
            </form>
        </div>
    </div>
  )
}

export default Login