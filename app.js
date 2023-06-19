const express = require('express');
const app = express()
const port = 8000

app.get('/',(req,res)=>{
    res.send(`Server is runnning on ${port}`)
})


app.listen(port , (req,res)=>{
    console.log(`server is running on post ${port}`);
})
