import React from 'react';
import './footer.css';
import { MapTrifold } from "phosphor-react";

const Footer = () => {
  return (
    <div className='sport__footer'>
        <p>Crido por Guilherme Salomão Agostini</p>
        <div className='sport__footer-address'>
          <MapTrifold size={32} color="#ffffff" weight="bold" />
          <address></address>
        </div>
    </div>
  )
}

export default Footer