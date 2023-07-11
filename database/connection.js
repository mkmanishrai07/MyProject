require("dotenv").config();
const { Sequelize } = require("sequelize");

const dbconn = new Sequelize(
  process.env.database,
  process.env.user,
  process.env.password,
  {
  
    host: process.env.server,    
    dialect: process.env.dialect || 'mysql',
    logging:false,
  }
);

try {
  dbconn.authenticate();
  console.log("Connected");
} catch (err) {
  console.log("err: ", err);
}


module.exports = dbconn