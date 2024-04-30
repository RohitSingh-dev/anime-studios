import React from 'react';
import './homepage.css';
import {Navbar} from '../../components';
import bg_video from '../../assets/JJK.mp4';

const Homepage = () => {
  return (
    <div className='homepage'>

      <video autoPlay loop muted>
        <source src={bg_video} type='video/mp4'/>
        Not Available
      </video>

        <div className="homepage-top"><Navbar /></div>
        <div className="homepage-bottom">
            <h3>Welcome to Anime <span>Studios</span>!!</h3>
            <p>One of the biggest library of Anime availabe online. 
                Download Anime from seamless high speed links. 
                DOWNLOAD! WATCH! ENJOY!</p>
        </div>
    </div>
  )
}

export default Homepage