import React from 'react'
import './Navbar.css'
const Navbar = () =>{
    return(
        <>
        <div className="Navigation">
            <div className="brand"></div>
            <div className="NavContent">
                <div>Services</div>
                <div>Products</div>
                <div>About Us</div>
                <div>Contact Us</div>                    
            </div>            
            <div className="getIn">
                <div>Log In</div>
                <div className="button">Sign Up</div>
            </div>
        </div>
        </>
    )
}

export default Navbar