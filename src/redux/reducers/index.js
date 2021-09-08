import { combineReducers } from "redux";
import { pokemonsReducer, selectPokemonReducer } from "./pokemonsReducers";

const reducers = combineReducers({
   Pokemons: pokemonsReducer,
   selectPokemon: selectPokemonReducer,
});

export default reducers;