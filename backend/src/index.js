const express = require('express');
const app = express();
app.use(express.json()); //Setting up midleware
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

app.get("/time", async (req,res)=>{
    try{
      const query_sql = `SELECT * FROM time`;
      const {rows} = await pool.query(query_sql);
      console.log(rows);
      return res.status(200).send(rows);
    }catch(err){
      return res.status(400).send(err);
    }
});

app.get("/jogador", async (req,res)=>{
  try{
    const query_sql = `SELECT * FROM jogador`;
    const {rows} = await pool.query(query_sql);
    console.log(rows);
    return res.status(200).send(rows);
  }catch(err){
    return res.status(400).send(err);
  }
});

app.get("/overview", async (req,res)=>{
  try{
    const query_sql = `SELECT jogador.nome as jogador, time.nome as time FROM jogador,time`;
    const {rows} = await pool.query(query_sql);
    console.log(rows);
    return res.status(200).send(rows);
  }catch(err){
    return res.status(400).send(err);
  }
});

app.listen(5000, ()=>{console.log(`Server Started on http://localhost:${PORT}`)});