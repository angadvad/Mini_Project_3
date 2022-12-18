import express from "express";
import {createPokemon,getRandomPokemon,updatePokemon,deletePokemon,initDb} from "../controllers/PokemonController.js"
const router = express.Router();

router.get('/',initDb)
router.post('/createPokemon',createPokemon);
router.get('/getRandomPokemon', getRandomPokemon);
router.put('/updatePokemon',updatePokemon);
router.delete('/deletePokemon', deletePokemon);

export default router;