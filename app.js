const express = require('express')
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoute')
const adminRoute = require('./routes/taskManageRoute');
const userModel = require('./models/userModel')
const taskModel = require('./models/taskModel')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
app.use(userRoutes)
app.use(taskRoutes)
app.use(adminRoute)

userModel.hasMany(taskModel,{foreignKey:"Userid"})
taskModel.belongsTo(userModel,{foreignKey:"Userid"})

userModel.sync({alter:true});
taskModel.sync({alter:true})

app.get('/',(req,res)=>{
    res.send("Server is runnng on port no 8000");
})
    app.listen(8000,()=>{
    console.log("Server is running on port no 8000");
})