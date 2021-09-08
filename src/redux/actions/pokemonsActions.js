import { apiAxios } from "../api/apiRedux";
import { ActionTypes } from "./actionsType";

export const loadPokemons = () => async (dispatch) => {
   const firstPage = 1;
   const response = await apiAxios.getPokemons(firstPage);
   dispatch({type: ActionTypes.LOAD_FETCH_POKEMONS, payload: response});
}

export const fetchPokemons = (page) => async (dispatch) => {
   console.log(page)
   const response = await apiAxios.getPokemons(page);
   console.log('pokem actions - ',response)
   dispatch({type: ActionTypes.FETCH_POKEMONS, payload: response});
}

export const fetchPokemon = (id) => async (dispatch) => {
   const response = await apiAxios.getPokemon(id);
   dispatch({type: ActionTypes.SELECT_POKEMON, payload: response.data,});
}