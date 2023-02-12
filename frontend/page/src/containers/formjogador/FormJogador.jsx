import { React, useState, useEffect} from 'react';
import './formjogador.css';
import axios from  'axios';

const FormJogador = ({value}) => {
  const [nome, setNome ] = useState(value ? value.nome : "");
  const [idade, setIdade ] = useState(value ? value.idade : 5);
  const [time, setTime ] = useState(value ? value.time : 1);
  const [data, setData ] = useState([]);

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

  const fetchData = ()=>{
    axios.get("http://localhost:5000/time")
      .then((res)=>{
        setData(res.data);
      }) 
  }

  useEffect(()=>{
    fetchData();
  },[])

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
    <div className='classic__form'>
      <form onSubmit={ handleSubmit }>
        <label>
          <p>Nome:</p>
          <input className='classic__textbox' 
          type="text" 
          placeholder="Digite o nome do Jogador"
          onChange={ handleNome }
          required
          value={nome}  />
        </label>
        <label>
          <p>Idade:</p>
          <input className='classic__textbox'
          type="number"
          min={5}
          step={1}
          onChange={ handleIdade }
          required
          value={idade}  />
        </label>
        <label>
          <p>Time:</p>
          <select className='classic-select'
          value={time} 
          required
          onChange={ handleTime }>
            {data.map((value,key)=>{
              return(
                <option key={key} value={value.id}>{value.nome}</option>
              )
            })}
          </select>
        </label>
        <input className='classic__button'
        type="submit" 
        value="Cadastrar" />
      </form>
    </div>
  )
}

export default FormJogador