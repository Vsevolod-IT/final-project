import React, { useEffect, useState } from "react";
import { freePokemon } from "../../redux/actions/pokemonsActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const ButtonFree = (props) => {
   const dispatch = useDispatch();
   const [press, setPress] = useState(false);
   const pokemon = props

   useEffect(() => {
      if(press){
         dispatch(freePokemon(pokemon));
         setPress(false);
      } 
   }, [press]);

   const handleClick = () => {
      setPress(true)
   };
   return(
      <Button variant="success" size="xm" onClick={handleClick}>let go</Button>
   )
};

export default ButtonFree;