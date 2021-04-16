import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import back from '../../images/back.jpg'
import {Link} from 'react-router-dom'
import {Data} from './data'
import {StyledCards} from './style'

function Home(){
  
  return(
    <div style={{backgroundImage: {back} }}>
      <StyledCards>
        <Container>
          {Data.products.map((product)=>{
            {console.log(product[0].title)}
            return(
              <Row key={product[0].title}>
              {product.map((item)=>{
                console.log(item.price)
                return(
                  <Col key={item.price} xs={12} sm={12} md={4} className="content-card">
                    <Card>
                      <Card.Img variant="top" width={200} height= {270} src={item.photo}/>
                        <Card.Body>
                          <Card.Title>{item.price}</Card.Title>
                          <Card.Text>
                            {item.title}
                          </Card.Text>
                          <Card.Link as={Link} to={item.link}>
                            <Button variant="primary">Detalhes</Button>
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
    </div>
  )
}

export default Home;
