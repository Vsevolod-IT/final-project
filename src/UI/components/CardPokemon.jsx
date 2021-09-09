import React from "react";
import { Link } from "react-router-dom";
import ButtonCatch from "./ButtonCatch";
import { Card, Button } from "react-bootstrap";


const CardPokemon = (props) => {
   return (
      <Card style={{ width: '18rem' }}>
      <Link to={`/pokemon/${props.id}`}>
        <Card.Img variant="top" src={`/pokemons/${props.id}.png`}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary">catch</Button>
        </Card.Body>
        </Link>
      </Card>
   )
}

export default CardPokemon;