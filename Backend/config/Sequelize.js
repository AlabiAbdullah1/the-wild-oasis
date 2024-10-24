const Sequelize = require("sequelize");
const databaseConfig = require("./database.js");
const dotenv = require("dotenv");

dotenv.config();

const env = process.env.APP_ENV || "development";
const config = databaseConfig[env];

const sequelize =
  env === "production" && config.use_env_variable
    ? new Sequelize(process.env[config.use_env_variable], {
        dialect: config.dialect,
        protocol: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false, // Disable logging
      })
    : new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
        logging: false, // Disable logging
      });

module.exports = sequelize;
