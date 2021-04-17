import React from  'react'
import { Form, Button} from 'react-bootstrap'

function FormAccount(props){

  return(
    <Form>
      <Form.Group controlId="formBasicEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite o seu e-mail" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite a sua senha" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar-me" />
      </Form.Group>
      <Button variant="success"  onClick={props.hide}>
        Fazer login
      </Button>
  </Form>
  )
}

export default FormAccount;
