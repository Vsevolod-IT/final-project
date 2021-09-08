import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, loadPokemons } from "../../redux/actions/pokemonsActions";
import CardPokemon from "../components/CardPokemon";
import Container from 'react-bootstrap/Container';
import { Grid, Row, Col } from "react-bootstrap";

const PageAllPokemons = () => {

   const [fetch, setFetch] = useState(false);
   const [currentPage, setCurrent] = useState(2);
   const dispatch = useDispatch();

   const pokemons = useSelector((state) => state.Pokemons.pokemons)


   useEffect(() => {
      dispatch(loadPokemons()); 
   }, []);

   const scrollHandler = (e) => {
      if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)< 100) {
         console.log('scroll')
         setFetch(true)
      }
   };

   useEffect( () => {
      document.addEventListener('scroll', scrollHandler)
      return function() {
        document.removeEventListener('scroll', scrollHandler)
      };
    }, []);


   useEffect(() => {
      if(fetch){
         dispatch(fetchPokemons(currentPage));
         setCurrent(prevState => prevState + 1);
         setFetch(false)
      } 
   }, [fetch]);

   return(
      <main>
        <Container>
           <Row className="justify-content-md-center">
        {pokemons.map(pokemon => 
           <CardPokemon id={pokemon.id} name={pokemon.name}/>
        )}
        </Row>
        </Container>
      </main>
   )
};

export default PageAllPokemons;