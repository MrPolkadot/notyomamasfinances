const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
//Creates connection for Railway, else uses local variables to connect locally
if (process.env.MYSQL_URL) {
  sequelize = new Sequelize(process.env.MYSQL_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
