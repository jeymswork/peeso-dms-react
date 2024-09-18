import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, redirect, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { LoginContext } from './context/LoginContext';
import axios from 'axios'

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'))
  const [accountDetails, setAccountDetails] = useState(localStorage.getItem('accountDetails'))
  const [authenticationValid, setAuthenticationValid] = useState(false)


  useEffect(() => {
    const checkAuthentication = async () => {
      const response = await axios.get('http://localhost:3000/employee/protected', { headers: {'Authorization': token}});
      console.log(token)
      setAuthenticationValid(response.data.authenticationValid)
      console.log(response.data.message)
      console.log(response.data)
    }
    checkAuthentication()
  }, [])

  

  return(
    <LoginContext.Provider value={{token, accountDetails}}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={authenticationValid ? "/home" : "/login"} replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  )
}

export default App
