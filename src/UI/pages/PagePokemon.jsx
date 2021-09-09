import React, {useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, removeSelectPokemon } from "../../redux/actions/pokemonsActions";
import CardPokemon from "../components/CardPokemon";

const PagePokemon = () => {
   const {pokemonId} = useParams();
   const pokemon = useSelector((state) => state.selectPokemon);
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      if (pokemonId && pokemonId !== "") dispatch(fetchPokemon(pokemonId));
      return () => {
         dispatch(removeSelectPokemon())
      }
   }, [pokemonId]);

   console.log(pokemon)
   
   return(
      <main className="container">
         <Button variant="primary" onClick={() =>  history.goBack()}>back to page</Button>
         <CardPokemon id={pokemon.id} name={pokemon.name}/>
      </main>
   )
};

export default PagePokemon;