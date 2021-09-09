import { combineReducers } from "redux";
import { pokemonsReducer, selectPokemonReducer, catchPokemonsReducer  } from "./pokemonsReducers";

const reducers = combineReducers({
   Pokemons: pokemonsReducer,
   selectPokemon: selectPokemonReducer,
   catchPokemons: catchPokemonsReducer,
});

export default reducers;