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
      const {info} = await pool.query(query_sql);
      return res.status(200).send(true);
    }catch(err){
      return res.status(400).send(err);
    }
});

app.get("/time", async (req,res)=>{
  try{
    const query_sql = `select * from time`;
    const {rows} = await pool.query(query_sql);
    return res.status(200).send(rows);
  }catch(err){
    return res.status(400).send(err);
  }
});

app.post("/jogador", async (req,res)=>{
  try{
    const query_sql = `select count(*) from time,jogador where (time.id=jogador.time_id and time.id=${req.body.time_id})`;
    const obStrange = await pool.query(query_sql);
    count = JSON.parse(JSON.stringify(obStrange)).rows[0].count;
    if(count < 5){
      const query_sql2 = `insert into jogador(nome,idade,time_id) values ('${req.body.nome}',${req.body.idade},${req.body.time_id})`;
      const info = await pool.query(query_sql2);
      return res.status(200).send(true);
    }else{
      return res.status(200).send(false);
    }
  }catch(err){
    return res.status(400).send(err);
  }
});

app.get("/jogador", async (req,res)=>{
  try{
    const query_sql = `select * from jogador`;
    const {rows} = await pool.query(query_sql);
    return res.status(200).send(rows);
  }catch(err){
    return res.status(400).send(err);
  }
});

app.get("/overview", async (req,res)=>{
  try{
    const query_sql = `SELECT jogador.nome as jogador, time.nome as time FROM jogador,time where (jogador.time_id=time.id)`;
    const {rows} = await pool.query(query_sql);
    return res.status(200).send(rows);
  }catch(err){
    return res.status(400).send(err);
  }
});



app.listen(5000, ()=>{console.log(`Server Started on http://localhost:${PORT}`)});