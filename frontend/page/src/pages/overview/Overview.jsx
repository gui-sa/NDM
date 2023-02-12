import React from 'react'
import './overview.css'
import { Navbar } from '../../components';
import { Footer, OverTable } from '../../containers';

function Overview() {
  return (
    <div className='sport__classic-page'>
      <div>
        <div className='classic__background'>
          <Navbar />
        </div>
        <h1>Overview</h1>
        <OverTable />
      </div>
      <Footer />
    </div>
  )
}

export default Overview
