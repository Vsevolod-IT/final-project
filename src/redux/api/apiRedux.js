import axios from "axios";

const axiosInstance = axios.create({
   baseURL:"http://localhost:3004"
});

export const apiAxios = {
   getPokemons(page){
      return axiosInstance
      .get(`/pokemons/GET/pokemons?_page=${page}&_limit=20`)
      .then((response) => { return response.data})
      .catch(error => {
         console.log('Error into api getPokemons')
         console.log(error.response)
         return '404'
      })
   },
   getPokemon(id){
      return axiosInstance
      .get(`/pokemons/${id}`)
      .then((response) => {return response.data})
      .catch(error => {
         console.log('Error into api getPokemon')
         console.log(error.response)
         return '404'
      })
   }
};