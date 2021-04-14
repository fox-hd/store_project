import React from 'react';
import {Link } from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BsPeopleCircle} from 'react-icons/bs'

function Header(){
  return(
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/cart">Carrinho</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Busca" className="mr-sm-2" />
            <Button variant="dark" placeholder="Busca">Busca</Button>
          </Form>
          <Nav.Link as={Link} to="/cart"><BsPeopleCircle/> Login </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  )
}

export default Header;
