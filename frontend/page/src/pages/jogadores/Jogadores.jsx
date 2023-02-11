import React from 'react'
import './jogadores.css'
import { Article, Brand, CTA, Navbar, Feature } from '../../components';
import { Features, Footer, Feed, Header } from '../../containers';

function Jogadores() {
  return (
    <div className='sport__classic-page'>
      <div className='classic__background'>
          <Navbar />
      </div>
      <h1>Jogadores</h1>
      <Footer/>
    </div>
)}

export default Jogadores
