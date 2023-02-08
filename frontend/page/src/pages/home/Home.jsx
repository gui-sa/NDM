import React from 'react'
import { Article, Brand, CTA, Navbar, Feature } from '../../components';
import { Features, Footer, Feed, Header } from '../../containers';

function Home() {
  return (
    <div >
        <Header />
        <Brand />
        <Feed />
        <Features />
        <CTA />
    </div>
)}

export default Home
