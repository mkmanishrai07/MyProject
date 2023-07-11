require("dotenv").config();
const user = require("../models/userModel");
const task = require("../models/taskModel");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.key;

const assignTask = async (req, res) => {
  try{
    const { taskid, Userid ,taskstatus } = req.body;

  await task.findOne({ where: { taskid: taskid } })
  .then(async () => {
    await task.update({Userid :Userid,taskstatus:taskstatus},{where:{taskid:taskid}});
  }).then(()=>{
    res.status(200).json({ message:"Task assigned"});
  })
  }catch(err){
    res.status(400).json({message:"Something went wrong", error:err})
  }
};

const Userlogin = async (req, res) => {
  try {
    const email = "manish@gmail.com";
    const password = "Manish@1234";

    const { Email, Password } = req.body;

    if (Email == email) {
      const token = jwt.sign({ email }, jwtKey, { expiresIn: "10000s" });
      res.status(200).send({
        status: 1,
        message: "login success",
        data: { token },
      });
    } else {
      res
        .status(400)
        .send({ status: 1, message: " User and password are not valid" });
    }
  } catch (err) {
    res.send("Something went wrong");
  }

  // try {
  //   const { Email, Password } = req.body;
  //   await user
  //     .findOne({
  //       where: {
  //         Email: Email,
  //       },
  //     })
  //     .then(async (result) => {
  //       const id = result.AId;
  //       const email = result.Email;
  //       const dbPassword = result.Password;

  //       const validate = await bcrypt.compare(Password, dbPassword);
  // const token = jwt.sign({ id, email }, jwtKey, { expiresIn: "10000s" });
  // if (validate) {
  //   res.status(200).send({
  //     status: 1,
  //     message: "login success",
  //     data: { token },
  //   });
  //       } else {
  //         res.status(400).send({ status: 1, message: "password is invalid" });
  //       }
  //     })
  //     .catch((err) => {
  //       res.status(400).send({ status: 0, message: "user is not registered" });
  //     });
  // } catch (err) {
  //   console.log(err);
  // }
};
module.exports = {
  assignTask,
  Userlogin,
};
