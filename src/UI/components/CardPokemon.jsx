import React from "react";
import ButtonCatch from "./ButtonCatch";
import { Card, Button } from "react-bootstrap";


const CardPokemon = (props) => {
   return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/pokemons/${props.id}.png`}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary">catch</Button>
        </Card.Body>
      </Card>
   )
}

export default CardPokemon;