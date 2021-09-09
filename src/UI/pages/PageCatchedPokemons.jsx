import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardPokemon from "../components/CardPokemon";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";

const PageCatchedPokemons = () => {
   const pokemons = useSelector((state) => state.catchPokemons.catchPokemons);
   return(
      <main>
        <Container>
           <Row className="justify-content-md-center">
            {pokemons.map(pokemon => 
           <CardPokemon key={pokemon.id} id={pokemon.id} name={pokemon.name}/>
        )}
        </Row>
        </Container>
      </main>
   )
};

export default PageCatchedPokemons;