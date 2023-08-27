

import React, { Component } from 'react';
import "../App.css";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// class DemoCarousel extends Component {
    // render() {
export default function Subject() {
        return (
            <Carousel className='img'>
                <div className='img'>
                    <img src="http://sciastra.com/new_admin//teams/files/Aditya%20Nayak_Biology.jpeg" />
                    <p className="legend">BIOLOGY</p>
                </div>
                <div className='img'>
                    <img src="http://sciastra.com/new_admin//teams/files/TIASHA_DAS_Biology.jpg" />
                    <p className="legend">BIOLOGY</p>
                </div>
                <div className='img'>
                    <img src="http://sciastra.com/new_admin//teams/files/Kedar_Tornekar1.jpg" />
                    <p className="legend">BIOLOGY</p>
                </div>
                <div className='img'>
                <img src="http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg" />
                    <p className="legend">BIOLOGY</p>
                </div>
                <div className='img'>
                    <img src="http://sciastra.com/new_admin//teams/files/Piyush_Verma_biology.jpg" />
                    <p className="legend">BIOLOGY</p>
                </div>
                <div className='img'>
                    <img src="http://sciastra.com/new_admin//teams/files/Siddharth_Bhatt_physics.jpg" />
                    <p className="legend">PHYSICS</p>
                </div>
                <div className='img'>
                    <img src="http://sciastra.com/new_admin//teams/files/Ripunjay.JPG" />
                    <p className="legend">PHYSICS</p>
                </div>
                <div className='img'>
                    <img src="http://sciastra.com/new_admin//teams/files/Screenshot(49).png" />
                    <p className="legend">PHYSICS</p>
                </div>
                <div className='img'>
                <img src="http://sciastra.com/new_admin//teams/files/Sagar_Rathore_physics.jpg" />
                    <p className="legend">PHYSICS</p>
                </div>
                <div className='img'>
                    <img src="http://sciastra.com/new_admin//teams/files/Abhay_Gupta_physics.jpg" />
                    <p className="legend">PHYSICS</p>
                </div>
            </Carousel>
            
        );
    // }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

