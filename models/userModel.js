const dbconn = require("../database/connection");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const user = dbconn.define(
  "User",
  {
    Userid : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"Active"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeUpdate:async(user)=>{
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    },
  },
);

module.exports = user;
