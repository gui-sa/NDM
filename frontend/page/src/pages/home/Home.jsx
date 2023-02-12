import React from 'react'
import './home.css'
import {  Navbar} from '../../components';
import { Footer, Feed, Header } from '../../containers';

function Home() {
  return (
    <div className='sport__classic-page'>
      <div>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Feed />
      </div>
      <Footer/>
    </div>
)}

export default Home
