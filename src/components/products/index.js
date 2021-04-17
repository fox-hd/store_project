import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { StyledProduct } from './style'
import Payment from '../../images/payment.png'
import { Link } from 'react-router-dom';

function Product(props){
  const {title, price, photo, detail, payment} = props.location.data
  return(
    <StyledProduct>
      <h1 className="title">Detalhes do Produto</h1>
      <Container>
        <Row>
          <Col>
          <img src={photo}/>
          </Col>
          <Col className="product">
          <p className="description">{title}</p>
          <p className="price">{price}</p>
          <p className="info-footer">{detail}</p>
          <p className="payment"><img src={Payment}/>{payment}</p>
          <Button variant="success" size="lg" className="buy" as={Link} to="/cart">Comprar</Button>
          <Button variant="primary" size="lg" as={Link} to="/cart">Adicionar ao carrinho</Button>
          </Col>
        </Row>
      </Container>
    </StyledProduct>
  )
}

export default Product;
