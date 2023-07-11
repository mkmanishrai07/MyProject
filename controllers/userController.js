require("dotenv").config();
const { Op } = require("sequelize");
const user = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.key;

const UserRegistration = async (req, res) => {
  const { email, firstname, lastname, phone, about, status, password } =
    req.body;

  const userData = await user.build({
    email: email,
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    about: about,
    status: status,
    password: password,
  });

  const data = await user.findOne({
    where: {
      email: email,
    },
  });

  if (data) {
    res.status(400).json({ message: "User already exists", status: 0 });
  } else {
    userData.save();
    res.status(200).json({ message: "Registraion success", status: 1 });
  }
};

const findUserDetails = async (req, res) => {
  try {
    const { Userid  } = req.body;
    await user.findOne({where:{Userid :Userid }})
      .then((result) => {
        if (result) {
          res.status(200).json({ status: 1, data: result });
        } else {
          res.status(400).json({ status: 0, message: "User not found" });
        }
      })
      .catch((err) => {
        res.send({ message: "please provide Correct token", error: err });
      });
  } catch (err) {
    res.send({ message: "Something went wrong", error: err });
  }
};

const UpdateUserDetails = async (req, res) => {
  try {
    const {
      Userid ,
      firstname,
      lastname,
      email,
      phone,
      about,
      status,
      password,
    } = req.body;

    const genSalt = await bcrypt.genSaltSync(10, "a");
    const hashPassword = bcrypt.hashSync(password, genSalt);

    const checkUser = await user.findOne({
      where: {
        [Op.or]: [{ Userid : Userid  }],
      },
    });

    if (checkUser) {
      const data = await user.update(
        {
          firstname:firstname,
          lastname:lastname,
          email:email,
          phone:phone,
          about:about,
          status:status,
          password: hashPassword,
        },
        {
          where: {
            Userid : Userid ,
          },
        }
      );

      res.status(200).json({ message: "User updated", status: 1, data: data });
    } else {
      res.status(400).json({ message: "User not found ", status: 0 });
    }
  } catch (err) {
    res.send({ message: "Something went wrong", error: err });
  }
};
const deleteUserDetails = async (req, res) => {
  try {
    const {Userid } = req.body;
    await user
      .findOne({
        where: { Userid : Userid  },
      })
      .then(async (result) => {
        if (result) {
          const data = await user.destroy({
            where: {
              Userid :Userid ,
            },
          });
          res
            .status(200)
            .json({ status: 1, message: "User deleted success", data: data });
        } else {
          res.status(400).json({ status: 0, message: "User not found" });
        }
      })
  } catch (err) {
    res.send({ message: "Something went wrong", error: err });
  }
};

module.exports = {
  UserRegistration,
  findUserDetails,
  UpdateUserDetails,
  deleteUserDetails,
  // Userlogin,
};
