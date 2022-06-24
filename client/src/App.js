import React from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>   
          <Route path="/" element={<HeroSection/>}/>       
        </Routes>
        <Footer/>
      </Router>
    </>    
  )
}

export default App;
