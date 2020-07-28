const { DataTypes } = require('sequelize');
const sequelize = require('../config/config')

const User = sequelize.define('Users', {
  nickname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
      type: DataTypes.STRING
  },
  image:{
    type: DataTypes.STRING
  }
});

module.exports = User;