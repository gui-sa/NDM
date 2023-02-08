import React, { useState } from 'react';
import { X, List } from "phosphor-react";
import { Link } from 'react-router-dom';

import './navbar.css';

const Menu = () => {
  return (
    <>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/times">Times</Link></p>
      <p><Link to="/jogadores">Jogadores</Link></p>
      <p><Link to="/overview">Overview</Link></p>
    </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='sport__navbar'>
      <div className='sport__navbar-branding'>
        <div className='sport_navbar-branding-logo'>
          <img src="https://source.unsplash.com/64x64/?Soccer" alt="Logo" />
        </div>
        <p> E-Sports </p>
      </div>

      <div className='sport_navbar-links_container'>
        <Menu />
      </div>
      <div className='sport_navbar-links_menu'>
        {toggleMenu ? <X color="#fff" size={'7vh'} onClick={() => setToggleMenu(false)} />
          :<List color="#fff" size={'7vh'} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && ( 
          <div className='sport_navbar-links_menu-openned scale-up-ver-top'>
            <div className='sport_navbar-links_menu-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar