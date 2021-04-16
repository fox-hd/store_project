import React, {useState} from  'react'
import { Form, Button} from 'react-bootstrap'
import {StyledForm} from './style'


function FormSignUp(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState('Todos os campos são obrigatórios')
  const [ischecked, setIsChecked] = useState(false)
  const success = "Formulario enviado com sucesso"


  function SubmitForm(e){
    e.preventDefault()
    setMessage('')
    ValidForm()
    if(!message){
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setCpf('')
      setTel('')
      setIsChecked(false)
    }
  }

  const ValidForm = () =>{
    if (!name) return setMessage("Nome é obrigátorio")
    if (!email) return setMessage("Email é obrigátorio")
    if (password.length < 6) return setMessage("Senha é obrigátorio")
    if (confirmpassword !== password) return setMessage("Não confere com senha anterior")
    if (!cpf || cpf.length < 11) return setMessage("CPF é obrigátorio")
    if (!tel || tel.length < 9) return setMessage("Tel é Obrigátorio")
    if (!ischecked) return setMessage("É necessário no termo de aceite")
  }

  const ValidName = (e) =>{
    setName(e.target.value)
  }

  const ValidEmail = (e) =>{
    setEmail(e.target.value)
  }

  const ValidPassword = (e) =>{
    setPassword(e.target.value)
    console.log(password)
  }

  const ConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value)
    console.log(confirmpassword)
  }

  const ValidCpf = (e) =>{
    setCpf(e.target.value)
  }

  const ValidTel = (e) =>{
    setTel(e.target.value)
  }

  const ValidCheckBox = (e) =>{
    setIsChecked(e.target.checked)
    console.log(ischecked)
  }
  

  return(
    <StyledForm>
      <h4>Preencha seus dados para realizar o cadastro</h4>
      <div>{message? <p className="error">{message}</p> : <p className="success">{success}</p>}</div>
      <Form className="layout-form" onSubmit={SubmitForm}> 
        <Form.Group controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" value={name} onChange={ValidName} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={ValidEmail}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={ValidPassword}/>
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirmar Senha</Form.Label>
          <Form.Control type="password" placeholder="Repita a senha" value={confirmpassword} onChange={ConfirmPassword}/>
        </Form.Group>
        <Form.Group controlId="formBasicCpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="number" placeholder="Digite seu CPF" value={cpf} onChange={ValidCpf}/>
        </Form.Group>
        <Form.Group controlId="formBasicTel">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" placeholder="Nº de telefone" value={tel} onChange={ValidTel}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Confirmo os dados preenchidos" checked={ischecked} onChange={ValidCheckBox}/>
        </Form.Group>
        <Button variant="success" type="submit" >
          Cadastrar
        </Button>
    </Form>
  </StyledForm>
  )
}

export default FormSignUp;