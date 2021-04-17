import React from  'react'
import { Form, Button} from 'react-bootstrap'


function FormAccount(props){

  return(
    <Form>
      <Form.Group controlId="formBasicEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success"  onClick={props.hide}>
        Fazer login
      </Button>
  </Form>
  )
}

export default FormAccount;