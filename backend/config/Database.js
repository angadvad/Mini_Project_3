import {Sequelize} from "sequelize";

const db = new Sequelize('pokemondb','root','admin',{
    host: "localhost",
    dialect: "mysql"
});

export default db;