import React from 'react'
import './Navbar.css'
import {Search} from 'heroicons-react'
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
                    <li className='searchComponents'>
                        {/* <p>Search</p> */}
                        <Search color="black" width="25px"/>
                        <input type="input" placeholder='Find Components'/>
                    </li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar