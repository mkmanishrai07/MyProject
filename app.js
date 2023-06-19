const express = require('express');
const app = express()
const port = 8000

app.get('/',(req,res)=>{
    res.send(`Server is runnning on ${port}`)
})

app.post('/add',(req,res)=>{
    res.send({message : "Added item"})
})



app.listen(port , (req,res)=>{
    console.log(`server is running on post ${port}`);
})
