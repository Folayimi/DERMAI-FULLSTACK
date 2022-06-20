import React from 'react'
import './Navbar.css'
const Navbar = () =>{
    return(
        <>
        <div className="Navigation">
            <div className="brand">
                <div className="span1">Gad</div><div className="span2">Gets</div>                
            </div>
            <div className="NavContent">
                <ul>
                    <li>Categories</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>
                        <input type="input"/>
                    </li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar