import React, {useState} from  'react'
import { Form, Button} from 'react-bootstrap'

function FormAccount(){
  const [data, setData] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function checkAccount(){
    fetch("http://localhost/pwn/login.php?", {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, senha: password})
    })
    .then(response => response.json()).then(response => {setData(response)});
    console.log(data)
    checkSuccess()
  }

  function ForgotPass(){
    fetch(`http://localhost/pwn/email.php?`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email})
    })
    .then(response => response.json()).then(response => {setData(response)});
    console.log(data[0])
  }

  const getEmail = (e) =>{
    setEmail(e.target.value)
    console.log(email)
  }

  const getPassword = (e) =>{
    setPassword(e.target.value)
    console.log(password)

  }

  function checkSuccess(){
    
  }

  return(
    <Form>
      <Form.Group controlId="formBasicEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Digite o seu e-mail" value={email} onChange={getEmail} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control required type="password" placeholder="Digite a sua senha" value={password} onChange={getPassword}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar-me" />
      </Form.Group>
      <Button variant="success"  onClick={checkAccount} >
        Fazer login
      </Button>
      <Button variant="primary" className="forgotpassword" onClick={ForgotPass} >
        Esqueci minha senha
      </Button>
  </Form>
  )
}

export default FormAccount;
