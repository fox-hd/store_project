import React, { useState, useContext} from 'react';
import {Link } from 'react-router-dom';
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BsPeopleCircle} from 'react-icons/bs'
import ModalSignIn from './components/sign_in'
import {LoginContext} from './components/Context/LoginContext'


function Header(){
  const {codcli, user} = useContext(LoginContext);
  const [modalSignInShow, setModalSignInShow] = React.useState(false);
  const [search, setSearch] = useState('')
  
  function FieldSearch(e){
    setSearch(e.target.value)
  }
  
  return(
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {codcli && 
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/carrinho">Carrinho</Nav.Link>
          </Nav>
          }
          <Navbar.Brand >{user}</Navbar.Brand>
          <Form inline style={{marginLeft: "auto" }} >
            <Form.Control required type="text" placeholder="Busca" className="mr-sm-2" value={search} onChange={FieldSearch}/>
            <Button variant="outline-light" className="mr-sm-2" placeholder="Busca" as={Link} to={{pathname:"/busca", data: {search, setSearch}}}>Busca</Button>
          </Form>
          <Button variant="primary" onClick={() => setModalSignInShow(true)}>
          <BsPeopleCircle/> Login
          </Button>
        </Navbar.Collapse>
      </Navbar> 
      <ModalSignIn
        show={modalSignInShow}
        onHide={() => setModalSignInShow(false)}
      />
    </div>
  )
}

export default Header;
