const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); //Setting up midleware
app.use(cors());
const PORT = 5000;
require('dotenv').config();
const { Pool } = require('pg');

//Conecting inside docker's network: bridge
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_DATABASE,
});

app.post("/time", async (req,res)=>{
    try{
      const query_sql = `insert into time(nome) values ('${req.body.nome}')`;
      const {rows} = await pool.query(query_sql);
      console.log("RECEBIDO COM SUCESSO");
      return res.status(200).send(true);
    }catch(err){
      return res.status(400).send(err);
    }
});

app.post("/jogador", async (req,res)=>{
  try{
    const query_sql = `insert into jogador(id,nome,idade,time_id) values (101,'Miracle da SHOPEE',22,4)`;
    const {rows} = await pool.query(query_sql);
    console.log(rows);
    return res.status(200).send(rows);
  }catch(err){
    return res.status(400).send(err);
  }
});

app.get("/overview", async (req,res)=>{
  try{
    const query_sql = `SELECT jogador.nome as jogador, time.nome as time FROM jogador,time where (jogador.time_id=time.id)`;
    const {rows} = await pool.query(query_sql);
    console.log(rows);
    return res.status(200).send(rows);
  }catch(err){
    return res.status(400).send(err);
  }
});



app.listen(5000, ()=>{console.log(`Server Started on http://localhost:${PORT}`)});