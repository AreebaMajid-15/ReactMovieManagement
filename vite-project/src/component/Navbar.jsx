import React from "react"
// import { Link } from "react-router-dom"
import {Link} from  "react-router-dom"

import "../styles/Navbar.css"

// navbar in page 
const  Navbar = () => {
    return(
    <nav className="navbar" style={{display: "grid",
        gridTemplateColumns: "80% 20%",
        backgroundColor: "rgb(153, 153, 244)",
        color: "white"
    }}>
        <div className="navbar-left" >
        <Link to="/" style={{color: "white"}}> Home</Link>
        <Link to="/Movies" style={{color: "white"}}> Movies</Link>
        </div>
       
        <div className="navbar-right" >
        <Link to="/Login"  style={{color: "white"}} > Login</Link>
        </div>
    
    </nav>
    )
}

export default Navbar