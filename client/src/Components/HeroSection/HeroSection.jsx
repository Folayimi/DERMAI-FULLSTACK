import React from 'react'
import './HeroSection.css'
import {Search,ChevronLeft,ChevronRight} from 'heroicons-react'
import {motion} from 'framer-motion'
import { graduallyAppear, InfromLeft} from '../Variants/Variants'
import { ProductsContainer } from '../Styles/Global.styled'
const HeroSection = () =>{
    return(
        <>
            <div className="heroSection">
                <div className="intro">
                    <motion.div 
                        // variants={}
                    >
                        Gad-Gets
                    </motion.div>                    
                    <motion.p
                        variants={graduallyAppear}
                        initial="hidden"
                        animate="visible"
                    >
                        Get your Gadgets here!
                    </motion.p>
                </div>                
                {/* <div className="herobody">
                    <div className="section1">
                        <div className="carousel">
                            <div className="change">
                                <ChevronLeft color="white" size="40px"/>
                            </div>
                            <div className="carouselBody">
                                <div className="image">

                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Pariatur fugiat unde saepe vel officia recusandae maxime 
                                    voluptatem consectetur exercitationem? Animi minima 
                                    repellendus vero consequatur voluptate illum 
                                    est provident ullam odit.
                                </div>
                            </div>
                            <div className="change">
                                <ChevronRight color="white" size="40px"/>
                            </div>
                        </div> 
                    </div>
                    <motion.div className="section2"
                        variants={InfromLeft}
                        initial="hidden"
                        animate="visible"
                    >
                        <p>Explore Our GadGets</p>
                        <div className='searchComponents'>            
                            <Search color="black"/>
                            <input type="input" placeholder='Explore...'/>                
                        </div>
                    </motion.div>
                </div> */}

                <ProductsContainer>
                    <h2>Our Products</h2>

                </ProductsContainer>

                
            </div>
        </>
    )
}

export default HeroSection