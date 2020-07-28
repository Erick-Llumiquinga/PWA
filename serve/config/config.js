const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('edukt', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });

module.exports = sequelize;