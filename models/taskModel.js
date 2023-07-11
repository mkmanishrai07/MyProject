const dbconn = require('../database/connection');
const { DataTypes } = require('sequelize');

const task = dbconn.define('task',{
    taskid:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    tasktitle:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    taskstatus:{
        type:DataTypes.STRING,
        allowNull:false,
        dialectTypes:"Assigned to user"
    },
})


module.exports = task