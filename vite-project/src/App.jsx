import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import { Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
 //import Footer from './pages/Footer.jsx'
 import Home from './pages/Home.jsx'
 import Movies  from './pages/Movies.jsx'
 import Login from './pages/Login.jsx'

function App() {
  return (
    <>
      
        <h1>React Movie app</h1>
        < Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/Movies" element = {<Movies />} />
          <Route path="/Login" element = {<Login />} />

        </Routes>
        
         {/*  < Footer />  */}
        
    </>
  )
}

export default App
