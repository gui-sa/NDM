import {React, useEffect, useState} from 'react';
import './overtable.css';
import axios from 'axios';

const OverTable = () => {
  const [data, setData] = useState([]);

  const fetchData = ()=>{
    axios.get("http://localhost:5000/overview")
      .then((res)=>{
        setData(res.data);
      }) 
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  const Line = (col,id) => {
    return (
      <tr key={id}>
        <td>
          {col.jogador}
        </td>
        <td>
          {col.time}
        </td>
      </tr>
    )
  }

  return (
    <div className='classic__table'>
      <table>
      <thead>
          <tr>
            <th>Nome do Jogador</th>
            <th>Nome do Time</th>
          </tr>
        </thead>
        <tbody>
            {
              data.map(Line)
            }
        </tbody>
      </table>
    </div>
  )
}

export default OverTable