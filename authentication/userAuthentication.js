const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtKey = process.env.key;

const authentic = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader !== undefined) {
    
    const bearer = authHeader.split(" ");
    const token = bearer[1];
    const check =  jwt.verify(token, jwtKey,(err)=>{
      if(err){
        res.status(400).json({message:"token not valid"})
      }
      else{
        next()
      }
    });
  } else {
    res.send({message:"Token not found"});
  }
};

module.exports = authentic;
