import { Sequelize } from "sequelize";

//! uri connection bd

const dbname = process.env.URIDBNAME;
const username = process.env.URINAME;
const host = process.env.URIHOST;
const password = process.env.URIPASS;

const sequelize = new Sequelize(dbname, username, password, {
    host: host,
    dialect: "mysql", /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging: false
});



export default sequelize;
