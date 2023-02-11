import React from 'react'
import './times.css'
import { Article, Brand, CTA, Navbar, Feature } from '../../components';
import { Features, Footer, Feed, Header, FormTime } from '../../containers';

function Times() {
  return (
    <div className='sport__classic-page'>
      <div className='classic__background'>
        <Navbar />
      </div>
      <h1>Cadastro de Times</h1>
      <FormTime/>
      <Footer/>
    </div>
  )
}

export default Times
