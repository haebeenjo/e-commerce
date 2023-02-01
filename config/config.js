require('dotenv').config();
const env = process.env;

const development = {
  username: 'root',
  password: process.env.MYSQL_AWS_PASSWORD,
  database: 'onlineShop_db',
  host: process.env.MYSQL_AWS_HOST,
  dialect: 'mysql',
};

const production = {
  username: 'root',
  password: null,
  database: 'database_production',
  host: '127.0.0.1',
  dialect: 'mysql',
};

const test = {
  username: 'root',
  password: process.env.MYSQL_AWS_PASSWORD,
  database: 'onlineShop_test_db',
  host: process.env.MYSQL_AWS_HOST,
  dialect: 'mysql',
};

module.exports = { development, production, test };
