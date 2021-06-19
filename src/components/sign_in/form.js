import React, {useState, useEffect} from  'react'
import { Form, Button} from 'react-bootstrap'

function FormAccount(){
  const [enter, setEnter] = useState(0)
  const [data, setData] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(() => {
  //   fetch("http://localhost/pwn/login.php?", {
  //     method: 'POST', 
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({email: email, senha: password})
  //   })
  //   .then(response => response.json()).then(response => {setData(response)});
  //   checkSuccess()
  // },[data])

  // function checkAccount(){
  //   setData('check')
  // }

  // function checkAccount(){
  //   fetch("http://localhost/pwn/login.php?", {
  //     method: 'POST', 
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({email: email, senha: password})
  //   })
  //   .then(response => response.json()).then(response => {setData(response)});
  //   console.log(data)
  // }
  useEffect(() => {
    fetch("http://localhost/pwn/login.php?", {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, senha: password})
    })
    .then(response => response.json()).then(response => {setData(response[0])});
  },[enter])
  

  function ForgotPass(){
    fetch(`http://localhost/pwn/email.php?`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email})
    })
    .then(response => response.json()).then(response => {setData(response)});
  }

  const getEmail = (e) =>{
    setEmail(e.target.value)
    console.log(email)
  }

  const getPassword = (e) =>{
    setPassword(e.target.value)
    console.log(password)

  }

  function buscar(){
    setEnter(1)
  }

  function Logout(){
    setData()
  }

    try {
      return(
        <>
        <p className="welcome">Bem vindo {data.nome} </p>
        <Button variant="primary" className="logout" onClick={Logout} >
          Logout
        </Button>
        </>
      )
      
   }
   catch (e) {
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
            <Button variant="success"  onClick={buscar}>
              Fazer login
            </Button>
            <Button variant="primary" className="forgotpassword" onClick={ForgotPass} >
              Esqueci minha senha
            </Button>
        </Form>
      )
   }
    
  }
export default FormAccount;
