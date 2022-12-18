import {Sequelize} from "sequelize";

//should move these into a .env file
const db = new Sequelize('pokemondb','root','iodmysql2022',{
    host: "localhost",
    dialect: "mysql"
});

export default db;