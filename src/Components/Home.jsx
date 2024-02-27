import React from 'react';
import './Home.css';
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="Home">
        <Navbar/>
        <div className="home-content">
            <p className='neon'>THE TAKEOFF OF YOUR BUSINESS</p>
            <p className='neon2'>STARTS HERE...</p>
        </div>
    </div>
  );
}

export default Home;