import { ActionTypes } from "../actions/actionsType";

const statePokemons = {
   pokemons: [],
};

export const pokemonsReducer = (state=statePokemons, {type, payload}, ) => {
   switch (type) {
      case ActionTypes.LOAD_FETCH_POKEMONS:
         console.log('state load',state)
         console.log('payload load',payload)
         return {...state, pokemons:payload};
      case ActionTypes.FETCH_POKEMONS:
         console.log('state fetch',state)
         console.log('payload fetch',payload)
         return {...state, pokemons:[...state.pokemons, ...payload]};
      default:
          return state;
   }
};

export const selectPokemonReducer = (state={}, {type, payload}) => {
   switch (type) {
      case ActionTypes.SELECT_POKEMON:
         return {...state, ...payload};
      case ActionTypes.REMOVE_SELECTED_POKEMON:
         return {};
      default:
         return state;
   }
};