import React from "react";
import { Link } from "react-router-dom";
import ButtonCatch from "./ButtonCatch";
import { Card } from "react-bootstrap";


const CardPokemon = (props) => {
   return (
      <Card style={{ width: '18rem' }} key={props.id}>
        <Link to={`/pokemon/${props.id}`}>
        <Card.Img variant="top" src={`/pokemons/${props.id}.png`}/>
        </Link>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <ButtonCatch pokemon={props} />
        </Card.Body>
      </Card>
   )
}

export default CardPokemon;