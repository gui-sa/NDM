import { React, useState} from 'react';
import './formtime.css';

const FormTime = ({value}) => {
  const [nome, setNome ] = useState(value ? value.nome : "");

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando Formulario para o backend");
    console.log(nome);
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