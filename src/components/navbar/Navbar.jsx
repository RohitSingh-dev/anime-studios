import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'><h2>Anime <span>Studios</span></h2></div>
      <div className="navbar-right">
        <a href='#home'>Home</a>
        <a href='#library'>Library</a>
        <a href='#genre'>Genre</a>
        <a href='#forum'>Forum</a>
      </div>
    </div>
  )
}

export default Navbar