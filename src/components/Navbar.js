import React from "react";
// import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  container mx-5 my-3 justify-content-center">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img src="https://www.sciastra.com/blog/wp-content/uploads/2023/01/New-Sciastra-Logo.png" alt="SciAstra Logo"  width='80' height='60' />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link "  href="">
                  HOME
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="">
                  COURSES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  SELECTIONS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  BLOGS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  MATERIALS
                </a>
                </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Team">
                  TEAM
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href=""
                  role="button"
               
                >
                  CONTACT US
                </a>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    
  );
}
