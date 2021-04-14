import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import back from '../images/back.jpg'
import drone from '../images/drone.jpg'
import celular1 from '../images/celular-iphone.jpg'
import celular2 from '../images/celular-samsung.jpg'
import celular3 from '../images/celular-xiaomi.jpg'
import notebook1 from '../images/notebook-dell.jpg'
import notebook2 from '../images/notebook-positivo.jpg'
import notebook3 from '../images/notebook-samsung.jpg'
import teclado from '../images/teclado.jpg'
import headphone from '../images/headphone.jpg'
import {Link} from 'react-router-dom'

function Home(){

  return(
      <div style={{backgroundImage: {back} }}>
        <br/>
        <Container>
          <Row>
            <Col>
              <Card border="dark" style={{ width: '19rem', backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height= {270} src={celular1} />
                <Card.Body>
                  <Card.Title>R$ 4.599,00</Card.Title>
                  <Card.Text>
                    Smartphone Apple iPhone XS 64GB iOS Câmera Dupla 
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/celular-iphone"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height= {270} src={celular2} />
                <Card.Body>
                  <Card.Title>R$ 5.399,10</Card.Title>
                  <Card.Text>
                    Smartphone Samsung Galaxy S21 128GB Cinza 5G - 8GB RAM Tela 6,2” Câm. Tripla + Selfie 10MP 
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/celular-samsung"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height= {270} src={celular3} />
                <Card.Body>
                  <Card.Title>R$ 1.509,99</Card.Title>
                  <Card.Text>
                    Smartphone Xiaomi Redmi Note 9 128Gb 
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/celular-xiaomi"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Card border="dark" style={{ backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height={250} src={drone} />
                <Card.Body>
                  <Card.Title>R$ 1.438,90</Card.Title>
                  <Card.Text>
                    Drone Multilaser Fenix GPS FPV Câmera FULL HD 1920P 
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/drone"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height={250} src={teclado} />
                <Card.Body>
                  <Card.Title>R$ 369,90</Card.Title>
                  <Card.Text>
                    Teclado HyperX Alloy Core USB ABNT 2 
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/teclado"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height={250} src={headphone} />
                <Card.Body>
                  <Card.Title>R$ 179,90</Card.Title>
                  <Card.Text>
                    Headphone Basike Fone de Ouvido Bluetooth 
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/headphone"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            <br/>
            <Row>
            <Col>
              <Card border="dark" style={{ width: '19rem', backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height= {270} src={notebook1} />
                <Card.Body>
                  <Card.Title>R$ 4.177,15</Card.Title>
                  <Card.Text>
                    Notebook Dell Inspiron i15-3583-M3XP 8ª Geração Intel Core i5  
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/notebook-dell"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height= {270} src={notebook2} />
                <Card.Body>
                  <Card.Title>R$ 1.799,00</Card.Title>
                  <Card.Text>
                    Notebook Positivo Intel Celeron 4GB 500GB 
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/notebook-positivo"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ backgroundColor: "#FFFAFA" }}>
                <Card.Img variant="top" width={200} height= {270} src={notebook3} />
                <Card.Body>
                  <Card.Title>R$ 3.799,00</Card.Title>
                  <Card.Text>
                    Notebook Samsung Expert GfX X40 Intel Core i5, 8GB RAM 
                  </Card.Text>
                  <Card.Link as={Link} to="/produtos/notebook-samsung"> <Button variant="primary">Detalhes</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Home;
