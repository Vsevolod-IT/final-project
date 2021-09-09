import React from "react";
import { Link } from "react-router-dom";
import ButtonCatch from "./ButtonCatch";
import ButtonFree from "../components/ButtonFree";
import { Card } from "react-bootstrap";


const CardPokemon = (props) => {
  console.log(props)
   return (
      <Card style={{ width: '18rem' }} key={props.id}>
        <Link to={`/pokemon/${props.id}`}>
        <Card.Img variant="top" src={`/pokemons/${props.id}.png`}/>
        </Link>
        { props.btnFree &&
            <ButtonFree id={props.id}/>
          }
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          { props.data &&
            <Card.Title>{props.data.toLocaleDateString()} at {props.data.toLocaleTimeString()}</Card.Title>
          }
          <ButtonCatch pokemon={props} />
        </Card.Body>
      </Card>
   )
}

export default CardPokemon;