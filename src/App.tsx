import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { LoginContext } from './context/LoginContext';

function App() {

  const token = localStorage.getItem('token');
  const [accountDetails, setAccountDetails] = useState({})

  return(
    <LoginContext.Provider value={{token, accountDetails, setAccountDetails}}>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  )
}

export default App
