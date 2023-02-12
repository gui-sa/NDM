import { React, useState} from 'react';
import './formjogador.css';
import axios from  'axios';

const FormJogador = ({value}) => {
  const [nome, setNome ] = useState(value ? value.nome : "");
  const [idade, setIdade ] = useState(value ? value.idade : 5);
  const [time, setTime ] = useState(value ? value.time : 1);

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:5000/jogador', {
      nome: nome,
      idade: idade,
      time_id: time
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setNome("");
    setIdade(5);
    setTime(1);
  };

  const handleNome = (e)=>{
    setNome(e.target.value);
  };

  const handleIdade = (e)=>{
    setIdade(e.target.value);
  };

  const handleTime = (e)=>{
    setTime(e.target.value);
  };


  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          <p>Nome:</p>
          <input type="text" 
          placeholder="Digite o nome do Jogador"
          onChange={ handleNome }
          value={nome}  />
        </label>
        <label>
          <p>Idade:</p>
          <input type="number"
          min={5}
          step={1}
          onChange={ handleIdade }
          value={idade}  />
        </label>
        
        <label>
          <p>Time:</p>
          <input type="number"
          min={0}
          step={1}
          onChange={ handleTime }
          value={time}  />
        </label>
        <input type="submit" value="Criar" />
      </form>
    </div>
  )
}

export default FormJogador