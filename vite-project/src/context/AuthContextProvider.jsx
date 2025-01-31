
import React from "react"
// import { Link } from "react-router-dom"
// import {Link} from  "react-router-dom"
import { createContext, useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

 export const AuthContext = createContext() 
const  AuthContextProvider = ({children}) => {
  const [isAuthenticated , setAuthenticated] = useState(false)
  const [ token , setToken] = useState(null)
  const navigate = useNavigate()
   
  useEffect ( () => {
     console.log(token)
  }, [token])

  // if user is logout
  const login = (authToken) =>{
    console.log(token)
    setAuthenticated(true)
    setToken(authToken)
    navigate("/")
  } 
  // if user is login 
  const Logout = () => {

  }

return(
  <AuthContext.Provider value= {{token, isAuthenticated , login, Logout}}>
      {children}
  </AuthContext.Provider>
) 
    
}

export default AuthContextProvider


