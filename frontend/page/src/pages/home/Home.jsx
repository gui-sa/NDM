import React from 'react'
import './home.css'
import {  Navbar} from '../../components';
import { Footer, Feed, Header } from '../../containers';

function Home() {
  return (
    <div >
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Feed />
    </div>
)}

export default Home
