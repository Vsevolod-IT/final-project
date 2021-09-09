import React, {useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, removeSelectPokemon } from "../../redux/actions/pokemonsActions";

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
   }, [pokemonId])
   
   return(
      <main className="container">
         <Card style={{ width: '20rem' }}>
            <Button variant="primary" onClick={() =>  history.goBack()}>back to page</Button>
            <Card.Img variant="top" src={`/pokemons/${pokemonId}.png`}/>
            <Card.Body>
               <Card.Title>non</Card.Title>
               <Button variant="primary">catch</Button>
            </Card.Body>
         </Card>  
      </main>
   )
};

export default PagePokemon;