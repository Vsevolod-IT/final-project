import { apiAxios } from "../api/apiRedux";
import { ActionTypes } from "./actionsType";

export const loadPokemons = () => async (dispatch) => {
   const firstPage = 1;
   const response = await apiAxios.getPokemons(firstPage);
   dispatch({type: ActionTypes.LOAD_FETCH_POKEMONS, payload: response});
}

export const fetchPokemons = (page) => async (dispatch) => {
   const response = await apiAxios.getPokemons(page);
   dispatch({type: ActionTypes.FETCH_POKEMONS, payload: response});
}

export const fetchPokemon = (id) => async (dispatch) => {
   const response = await apiAxios.getPokemon(id);
   dispatch({type: ActionTypes.SELECT_POKEMON, payload: response});
}

export const removeSelectPokemon = () => {
   return {
      type: ActionTypes.REMOVE_SELECTED_POKEMON,
   };
};

export const catchPokemon = (pokemon) => {
   const data = new Date();
   const pokemonData = {...pokemon, data}
   return {
      type: ActionTypes.CACTCH_POKEMON,
      payload: pokemonData
   };
};

export const freePokemon = (pokemon) => {
   return {
      type: ActionTypes.FREE_POKEMON,
      payload: pokemon
   };
};