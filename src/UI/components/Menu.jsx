import React from "react";
import { BrowserRouter as Router, Link,Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menu = () => {
   return (
      <>
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          Pokedex
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Pages">
              <NavDropdown.Item ><Link to="/Catch">catch pokemons</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/">All pokemons</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      </>
   )
}

export default Menu;

