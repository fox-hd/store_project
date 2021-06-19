import React, {useState, useContext} from 'react';
import { Container, Row, Col, Button, Alert} from 'react-bootstrap';
import { StyledProduct } from './style'
import Payment from '../../images/payment.png'
import { Link } from 'react-router-dom';
import {LoginContext} from '../Context/LoginContext'

function Product(props){
  const {codcli} = useContext(LoginContext);

  const {nome, preco, codigo, desconto1, desconto2} = props.location.data
  const [status, setStatus]= useState()

  function Adicionar(e){
    e.preventDefault();
    setStatus('true');
    fetch("http://localhost/pwn/adicionarCarrinho.php?", {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({produto: nome, preco: preco, cod_produto: codigo, cod_cli: codcli})
    })
  }

  function mensagem(){
    return (
      <Alert variant="dark">
        O produto foi adicionado no Carrinho!
      </Alert>
    )
  }

  return(
    <StyledProduct>
      <h1 className="title">Detalhes do Produto {codcli}</h1>
      <Container>
        {status? mensagem():''}
        <Row>
          <Col>
          <img src={`/images/${codigo}.jpg`}/>
          </Col>
          <Col className="product">
          <p className="description">{nome}</p>
          <p className="price">R$ {preco}</p>
          <p className="info-footer">ou até 10x de R$ {desconto1} sem juros</p>
          <p className="payment"><img src={Payment}/> R$ {desconto2} - 10% de desconto em 1x no Cartão ou Boleto</p>
          <Button type="submit" variant="primary" size="lg" className="button" disabled={codcli === ""} onClick={Adicionar}>Adicionar ao carrinho</Button>
          <Button type="submit" variant="success" size="lg" className={`buy`} hidden={codcli === ""} as={Link} to={{pathname:"/carrinho"}}>Comprar</Button>
          {codcli?'': <p>Faça o login para adicionar produtos no seu carrinho</p>}
          </Col>
        </Row>
      </Container>
    </StyledProduct>
  )
}

export default Product;
