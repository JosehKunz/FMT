const { Sequelize } = require('sequelize'); 
const databaseConfig = require('../config/database.config');

const connection = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    port: databaseConfig.port
  }
);

module.exports = { connection };