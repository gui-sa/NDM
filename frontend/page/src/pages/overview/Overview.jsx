import React from 'react'
import './overview.css'
import { Article, Brand, CTA, Navbar, Feature } from '../../components';
import { Features, Footer, Feed, Header } from '../../containers';

function Overview() {
  return (
    <div >
      <div className='gradient_bg'>
        <Navbar />
      </div>
      <h1>Overview</h1>
    </div>
  )
}

export default Overview
