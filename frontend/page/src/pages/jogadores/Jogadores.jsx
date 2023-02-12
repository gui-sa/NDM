import React from 'react'
import './jogadores.css'
import { Navbar } from '../../components';
import { Footer, FormJogador } from '../../containers';

function Jogadores() {
  return (
    <div className='sport__classic-page'>
      <div>
        <div className='classic__background'>
          <Navbar />
        </div>
        <h1>Cadastro de Jogadores</h1>
        <FormJogador />
      </div>
      <Footer />
    </div>
  )
}

export default Jogadores
