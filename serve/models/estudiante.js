const { DataTypes } = require('sequelize');
const sequelize = require('../config/config')

const Student = sequelize.define('Users', {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING
  },
  age: {
      type: DataTypes.NUMBER
  },
  address: {
      type: DataTypes.DATE
  }
});

module.exports = Student;