import React from 'react'
import './Navbar.css'
const Navbar = () =>{
    return(
        <>
        <div className="Navigation">
            <div className="brand"></div>
            <div className="NavContent">
                <div>About Us</div>
                <div>Services</div>
                <div>Products</div>
                <div>Contact Us</div>                    
            </div>            
            <div className="getIn">
                <div className='button'>Apply As An Affiliate</div>
            </div>
        </div>
        </>
    )
}

export default Navbar