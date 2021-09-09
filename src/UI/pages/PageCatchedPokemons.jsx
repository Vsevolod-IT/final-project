import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardPokemon from "../components/CardPokemon";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";

const PageCatchedPokemons = () => {
   const pokemons = useSelector((state) => state.catchPokemons.catchPokemons);
   console.log(pokemons)
   return(
      <main>
        <Container>
           <Row className="justify-content-md-center">
            {pokemons.map(pokemon => 
           <CardPokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} data={pokemon.data}/>
        )}
        </Row>
        </Container>
      </main>
   )
};

export default PageCatchedPokemons;