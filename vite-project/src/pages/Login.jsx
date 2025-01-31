
import React, { useState } from 'react';
import { useContext } from 'react';
import  AuthContextProvider  from '../context/AuthContextProvider.jsx';
import axios from 'axios';
//import { useContext } from 'react'

// to check user login data is correct or not
export default function Login () {
    const [username , setUsername] = useState("");
    const [password , sertPassword] = useState("")
    const [ error , setError] = useState(null)
  //  const { Login } = useContext(AuthContext)


    // to check user login data from backend
    const handleLogin=  async ( e) => {
        e.preventDefault()
        try{
        //    const response = await axios ({
        //      method:"POST",
        //      url: `https://airy-short-danthus.glitch.me/login`,
        //      data:{
        //         username, password
        //      }
        const response = await axios.post(`https://airy-short-danthus.glitch.me/login`,{
            username , password
        } )
           
           if(response.data.success){
            console.log( response.data.token , "response")
            const {token} = response.data
            Login(token)
           }
        }catch(err) {
          //  setError(err)
            setError(err.response.data.message )
            console.log ( err.response.data.message)

        }
    }
    return(
        <>
        {/* Login Form on Page */}
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Enter your Usrname" value={ username} onChange={ (e)=> setUsername(e.target.value)}  />
            <input type="password" placeholder="Enter your password" value={ password} onChange={ (e)=> sertPassword(e.target.value)}  />
            <input type="submit"  value="Login" />
        </form>
        { error && <p> {error}</p>}

        </>
    )
}

//export  default Login ;