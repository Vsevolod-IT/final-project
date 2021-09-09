import React, { useEffect, useState } from "react";
import { catchPokemon } from "../../redux/actions/pokemonsActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const ButtonCatch = (props) => {
   const [catched, setCatched] = useState(true);
   const [press, setPress] = useState(false);
   const dispatch = useDispatch();
   const catchedList = useSelector((state) => state.catchPokemons.id);
   const pokemon = props.pokemon;
   const stat = catchedList.includes(pokemon.id)

   useEffect(() => {
      if(stat){
         setCatched(false);
      } 
   }, [catched]);

   const handleClick = () => {
      setPress(true)
   };

   useEffect(() => {
      if(press){
         dispatch(catchPokemon(pokemon));
         setPress(false);
         setCatched(false);
      } 
   }, [press]);

   return (
      <>
      {catched
      ? <Button variant="primary" onClick={handleClick} >catch</Button>
      : <Button variant="warning" onClick={handleClick} disabled={true}>catched</Button>
      }
      </>
   )
}

export default ButtonCatch;