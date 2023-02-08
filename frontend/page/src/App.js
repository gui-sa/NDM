import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './components';
import { Footer } from './containers';
import { Home, Overview, Times, Jogadores } from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='gradient_bg'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/overview' element={<Overview/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/jogadores' element={<Jogadores/>}/>
          <Route path='/times' element={<Times/>}/>
        </Routes>
        <Footer />
      </Router >
    </div>
)}

export default App
