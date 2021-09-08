import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import PageAllPokemons from "./UI/pages/PageAllPokemons";
import PageCatchedPokemons from "./UI/pages/PageCatchedPokemons";
import PagePokemon from "./UI/pages/PagePokemon";
import Header from "./UI/components/Header";


function App() {
   return (
     <div className="App">
       <Router>
         <Header />
           <Switch>
             <Route path="/" exact component={PageAllPokemons} />
             <Route path="/Catch" exact component={PageCatchedPokemons} />
             <Route path="/Pokemon/:pokemonId" exact component={PagePokemon} />
             {/* <Route component={NotFound} /> */}
           </Switch>
       </Router>
     </div>
   )
 }
 
 export default App;