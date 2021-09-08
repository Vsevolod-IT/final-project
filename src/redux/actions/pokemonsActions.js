import { getPokemons, getPokemon } from "../api/apiRedux/apiAxios";
import ActionTypes from "./actionsType";

export const fetchPokemons = () => async (dispatch) => {
   const firstPage = 1;
   const response = await getPokemons(firstPage);
   dispatch({type: ActionTypes.LOAD_FETCH_POKEMONS, payload: response.data});
}

export const fetchPokemon = (id) => async (dispatch) => {
   const response = await getPokemon(id);
   dispatch({type: ActionTypes.SELECT_POKEMON, payload: response.data,});
}