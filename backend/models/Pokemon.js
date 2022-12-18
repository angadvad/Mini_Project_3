import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pokemon = db.define('pokemon', {
    name: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Pokemon;