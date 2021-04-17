import React from 'react';
import { Modal, Button, Row, Col} from 'react-bootstrap'
import FormAccount from './form'
import {StyledAccount}  from './style'
import {Link} from 'react-router-dom'

function ModalSignIn(props) {

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Para continuar, entre com sua conta
          </Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <StyledAccount>
            <Row >
              <Col className="align-content">
                <div className="registered">
                  <h4>Já tem cadastro?</h4>
                  <FormAccount hide={props.onHide}/>
              </div>
            </Col>
            <Col className="align-content">
              <div className="unregistered">
                <h4>Ainda nao tem cadastro?</h4>
                <Button variant="primary" as={Link} to="/sign-up" onClick={props.onHide}>
                  Cadastrar conta
                </Button>
              </div>
            </Col>
          </Row>
          </StyledAccount>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>Sair</Button>
        </Modal.Footer>
      </Modal>
  </>
  );
}

export default ModalSignIn;

