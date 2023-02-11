import React from 'react'
import './overview.css'
import { Navbar } from '../../components';
import { Footer, OverTable } from '../../containers';

function Overview() {
  return (
    <div className='sport__classic-page'>
      <div className='classic__background'>
        <Navbar />
      </div>
      <h1>Overview</h1>
      <OverTable/>
      <Footer/>
    </div>
  )
}

export default Overview
