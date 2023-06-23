const { Sequelize } = require('sequelize')
require('dotenv').config()
const dbconn = new Sequelize (
    process.env.database,
    process.env.user,
    process.env.password,
    {
        host:process.env.server,
        dialect:process.env.dialect,
        logging:false
    }
)

try{
    dbconn.authenticate()
    console.log("Database connection successfull");
}catch(err){    
    console.log("Error in Database connection");
}