import React from "react";
import { Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menu = () => {
   return (
      <>
      <Navbar bg="light" variant="light"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          Pokedex
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Pages">
            <NavDropdown.Item as="li">
              <LinkContainer to="/Catch">
                <Nav.Link>catch pokemons</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="li">
                <LinkContainer to="/">
                  <Nav.Link>All pokemons</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      </>
   )
}
{/* <Nav.Link to="/Catch">catch pokemons</Nav.Link>
<Nav.Link to="/">All pokemons</Nav.Link>
<NavDropdown.Item><Link to="/">All pokemons</Link></NavDropdown.Item>
<NavDropdown.Item ><Link to="/Catch">catch pokemons</Link></NavDropdown.Item> */}
export default Menu;

