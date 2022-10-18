import { Sequelize } from "sequelize";


//! uri connection bd

const sequelize = new Sequelize('js', 'root', 'toor', {
    host: 'localhost',
    dialect:"mysql", /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

    //! SINCRONIZAR LAS ENTITIS CON BD
//* User.sync()- Esto crea la tabla si no existe (y no hace nada si ya existe)

//* User.sync({ force: true })- Esto crea la tabla, soltándola primero si ya existía

//* User.sync({ alter: true })- Esto verifica cuál es el estado actual de la tabla en la base de datos (qué columnas tiene,
//* cuáles son sus tipos de datos, etc.), y luego realiza los cambios necesarios en la tabla para que coincida con el modelo.

//?sincronizar automáticamente todos los modelos


try {
    if(process.env.DEV){
        await sequelize.authenticate()
    }
} catch (error) {
    // console.error('Unable to connect to the database:', error);
    if(process.env.DEV){
        console.error(error.original.code + "(Sequilize)");
    }
}

export default sequelize;
