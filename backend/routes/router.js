import express from "express";
import {createPokemon,getRandomPokemon,updatePokemon,deletePokemon,initDb} from "../controllers/PokemonController.js"
const router = express.Router();

router.get('/', initDb) //great! loads data automatically
router.post('/createPokemon', createPokemon);
router.get('/getRandomPokemon', getRandomPokemon);
router.put('/updatePokemon/:id', updatePokemon);
router.delete('/deletePokemon/:id', deletePokemon);

export default router;