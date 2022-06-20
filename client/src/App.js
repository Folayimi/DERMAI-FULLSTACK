import React from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>          
        </Routes>
      </Router>
    </>    
  )
}

export default App;
