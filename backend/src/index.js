const express = require('express')
const app = express()
app.use(express.json())

const PORT = 5000;

app.get("/api", (req,res)=>{
    
    res.json({"users":["userOne","userTwo","UserThree","MoreJson"]})
})

app.listen(5000, ()=>{console.log(`Server Started on http://localhost:${PORT}`)})