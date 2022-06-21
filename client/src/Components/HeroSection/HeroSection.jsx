import React from 'react'
import './HeroSection.css'
import covered2 from './Images/covered2.jpg'
const HeroSection = () =>{
    return(
        <>
            <div className="heroSection">
                <div className="image">
                    <img src={covered2} alt="display" />
                </div>
            </div>
        </>
    )
}

export default HeroSection