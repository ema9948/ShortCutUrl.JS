import { Sequelize } from "sequelize";
//! uri connection bd

const sequelize = new Sequelize('js', 'root', 'toor', {
    host: 'localhost',
    dialect:"mysql", /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging: false
});


export default sequelize;
