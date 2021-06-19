import React, {useState, useEffect} from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {StyledCards, StyledContent} from './style'

function Search(props){
  const [ data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost/pwn/produtos.php?nome=${props.location.data.search}`).then(res => res.json()).then(res => {setData(res)});
    props.location.data.setSearch('')
  },[props.location.data])
  
  return(
    <StyledContent>
      <h1>Resultado da sua busca por {data.nome}:</h1>
      <StyledCards>
        <Container>
          <Row>
            {data.map((product)=>{
              return(
                <Col key={product.nome} xs={12} sm={12} md={4} className="content-card">
                  <Card>
                    <Card.Img variant="top" width={200} height= {270} src={`/images/${product.codigo}.jpg`}/>
                      <Card.Body>
                        <Card.Title>R$ {product.preco}</Card.Title>
                        <Card.Text>
                          {product.nome}
                        </Card.Text>
                          <Button variant="primary" as={Link} to={{pathname:`/produtos/${product.codigo}`, data: product}} >Detalhes</Button>
                      </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </StyledCards>
    </StyledContent>
  )
}

export default Search;
