import React from 'react'
import './home.css'
import { Article, Brand, CTA, Navbar, Feature } from '../../components';
import { Features, Footer, Feed, Header } from '../../containers';

function Home() {
  return (
    <div >
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Feed />
        <Features />
        <CTA />
    </div>
)}

export default Home
