import React from 'react'
import './home.css'
import {  Navbar} from '../../components';
import { Features, Footer, Feed, Header } from '../../containers';

function Home() {
  return (
    <div >
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Feed />
        <Features />
    </div>
)}

export default Home
