import { React, useState} from 'react';
import './formtime.css';
import axios from  'axios';

const FormTime = ({value}) => {
  const [nome, setNome ] = useState(value ? value.nome : "");

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:5000/time', {
      nome: nome
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setNome("");
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="nome">
          <p>Nome:</p>
          <input type="text" 
          placeholder="Digite o nome do time"
          onChange={ (e)=> setNome(e.target.value)}
          value={nome}  />
        </label>
        <input type="submit" value="Criar" />


      </form>
    </div>
  )
}

export default FormTime