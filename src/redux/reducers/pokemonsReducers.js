import { ActionTypes } from "../actions/actionsType";

const statePokemons = {
   pokemons: [],
};

const stateCatch = {
   catchPokemons: [],
   id:[]
}

export const pokemonsReducer = (state=statePokemons, {type, payload}, ) => {
   switch (type) {
      case ActionTypes.LOAD_FETCH_POKEMONS:
         return {...state, pokemons:payload};
      case ActionTypes.FETCH_POKEMONS:
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

export const catchPokemonsReducer = (state=stateCatch, {type, payload}, ) => {
   switch (type) {
      case ActionTypes.CACTCH_POKEMON:
         return {...state, catchPokemons:[...state.catchPokemons, payload], id:[...state.id, payload.id]}
      case ActionTypes.CACTCH_POKEMON:
         return {...state, catchPokemons: state.pokemons.filter(p => p.id !== payload.id)};
      default:
          return state;
   }
};