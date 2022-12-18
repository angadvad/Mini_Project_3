import Pokemon from "../models/Pokemon.js";
import fetch from "node-fetch";
import { Sequelize } from "sequelize";
const Op = Sequelize.Op;

export const createPokemon = async (req, res) => {
    try {
        await Pokemon.create({
            name: req.body.name,
            url: req.body.url
        });
        res.json({ msg: "Create Pokemon Success" });
    } catch (error) {
        console.log(error);
    }
}

export const getRandomPokemon = async (req, res) => {
    try {
        const randoPokemon = await Pokemon.findAll({
            where: {
                id: Math.floor(Math.random() * 11),
            }
        });
        res.json(randoPokemon);
    } catch (error) {
        console.log(error);
    }
}

export const updatePokemon = async (req, res) => {
    try {
        const updatedPoke = await Pokemon.update(
            {
                name: req.body.name,
                url: req.body.url
            },
            {
                where: { id: req.body.id },
            }
        );

        res.status(200);
        res.json(updatedPoke);
    } catch (error) {
        console.log(error);
    }
};

export const deletePokemon = async (req, res) => {
    try {
        const deletePoke = await Pokemon.destroy({
            where: {
                id: req.body.id,
            }
        });
        res.json(deletePoke);
    } catch (error) {
        console.log(error);
    }
}

export const initDb = async (req, res) => {

    Pokemon.destroy({
        where: {
            id:{
                [Op.gt]:-1
            }
        }
      });

    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then((data) => {
            let dataResults = data.results;
            for (const key in data.results) {
                let idKey = parseInt(key) + 1;
                
                Pokemon.create({
                    id:idKey,
                    name:dataResults[key].name,
                    url:dataResults[key].url
                })
            }
            res.json(data)
        })
}
