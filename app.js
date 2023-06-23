const express = require('express');
const app = express()
const port = 8000
require('./Database')



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})