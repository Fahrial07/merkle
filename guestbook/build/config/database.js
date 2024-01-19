"use strict";
require('dotenv').config();
const { DB_USERNAME = null, DB_PASSWORD = null, DB_HOST = "127.0.0.1", DB_NAME = "database", DB_PORT = "3306" } = process.env;
module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: `${DB_NAME}_development`,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "mysql",
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: `${DB_NAME}_test`,
        host: DB_HOST,
        dialect: "mysql",
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: `${DB_NAME}_production`,
        host: DB_HOST,
        dialect: "mysql",
    },
};
