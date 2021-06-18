import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { StyledProduct } from './style'
import Payment from '../../images/payment.png'
import { Link } from 'react-router-dom';

function Product(props){
  const {nome, preco, codigo, desconto1, desconto2} = props.location.data
  return(
    <StyledProduct>
      <h1 className="title">Detalhes do Produto</h1>
      <Container>
        <Row>
          <Col>
          <img src={`/images/${codigo}.jpg`}/>
          </Col>
          <Col className="product">
          <p className="description">{nome}</p>
          <p className="price">R$ {preco}</p>
          <p className="info-footer">ou até 10x de R$ {desconto1} sem juros</p>
          <p className="payment"><img src={Payment}/> R$ {desconto2} - 10% de desconto em 1x no Cartão ou Boleto</p>
          <Button variant="success" size="lg" className="buy" as={Link} to={{pathname:"/carrinho", data: props.location.data}}>Comprar</Button>
          <Button variant="primary" size="lg" as={Link} to={{pathname:"/carrinho", data: props.location.data}}>Adicionar ao carrinho</Button>
          </Col>
        </Row>
      </Container>
    </StyledProduct>
  )
}

export default Product;
