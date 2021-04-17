import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {Data} from './data'
import {StyledCards} from './style'

function Home(){
  return(
      <StyledCards>
        <h1>Página Inicial</h1>
        <Container>
          {Data.products.map((product)=>{
            return(
              <Row key={product[0].title}>
              {product.map((item)=>{
                return(
                  <Col key={item.price} xs={12} sm={12} md={4} className="content-card">
                    <Card>
                      <Card.Img variant="top" width={200} height= {270} src={item.photo}/>
                        <Card.Body>
                          <Card.Title>{item.price}</Card.Title>
                          <Card.Text>
                            {item.title}
                          </Card.Text>
                          <Card.Link >
                            <Link to={{pathname:item.link, data: item}} >
                            <Button variant="primary">Detalhes</Button>
                            </Link>
                          </Card.Link>
                        </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
            )
          })}
        </Container>
      </StyledCards>
  )
}

export default Home;
