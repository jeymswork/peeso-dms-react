import React, {useContext, useEffect} from 'react'
import { LoginContext } from '../context/LoginContext'
import axios from 'axios'

const Dashboard = () => {
    const {token, accountDetails} = useContext(LoginContext)
    console.log(token)

    useEffect(() => {
        const checkToken = async () => {
            const response = await axios.get('http://localhost:3000/employee/protected', { headers: {'Authorization': token}});
            console.log(response.data);
        }
        checkToken()
    },[])

  return (
    <div>{accountDetails.lastName}</div>
  )
}

export default Dashboard