import React from 'react'
import Navbar from './components/Navbar';
import Team from './components/Team';
import './App.css';
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";


export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      
      <Routes>
        <Route exact path="/Team" element={<Team />} />
      </Routes>

    </Router>
    
    </>
  )
}
