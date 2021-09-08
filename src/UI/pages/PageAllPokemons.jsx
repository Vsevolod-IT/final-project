import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPokemons, loadPokemons } from "../../redux/actions/pokemonsActions";

const PageAllPokemons = () => {

   const [fetch, setFetch] = useState(false);
   const [currentPage, setCurrent] = useState(2);
   const dispatch = useDispatch();

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
         <div className="container">
        
         </div>
      </main>
   )
};

export default PageAllPokemons;