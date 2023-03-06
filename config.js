const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: process.env.PORT,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};