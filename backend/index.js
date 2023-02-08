const express = require('express')
const app = express()

app.get("/api", (req,res)=>{
    res.json({"users":["userOne","userTwo","UserThree","MoreJson"]})
})

app.listen(5000, ()=>{console.log("Server Started on http://localhost:5000")})