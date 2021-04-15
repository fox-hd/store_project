import React from  'react'
import { Form, Button} from 'react-bootstrap'


function FormSignUp(){

  const ValidForm = (e) =>{
    console.log(e)
  }

  return(
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Digite seu nome" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite uma senha" />
      </Form.Group>
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirmar Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite novamente a senha" />
      </Form.Group>
      <Form.Group controlId="formBasicCpf">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="number" placeholder="Digite seu CPF" />
      </Form.Group>
      <Form.Group controlId="formBasicTel">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="tel" placeholder="Nº de telefone" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit" onClick={ValidForm}>
        Fazer login
      </Button>
  </Form>
  )
}

export default FormSignUp;