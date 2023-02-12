import React from 'react'
import './home.css'
import {  Navbar} from '../../components';
import { Footer, Header } from '../../containers';

function Home() {
  return (
    <div className='sport__classic-page'>
      <div>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
      </div>
      <Footer/>
    </div>
)}

export default Home
