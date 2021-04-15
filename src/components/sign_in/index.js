import React from 'react';
import { Modal, Button, Row, Col} from 'react-bootstrap'
import FormAccount from './form'
import ModalSignUp from '../sign_up'
import {StyledAccount}  from './style'

function ModalSignIn(props) {
  const [modalSignUpShow, setModalSignUpShow] = React.useState(false);

  const openModal = () =>{
    setModalSignUpShow(true),
    props.hide()
  }

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
        </Modal.Header>
        <Modal.Body>
          <StyledAccount>
            <Row >
              <Col className="align-content">
                <div className="registered">
                  <h4>Já tem cadastro?</h4>
                  <FormAccount/>
              </div>
            </Col>
            <Col className="align-content">
              <div className="unregistered">
                <h4>Ainda nao tem cadastro?</h4>
                <Button variant="primary" onClick={openModal} >
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
      <ModalSignUp
        show={modalSignUpShow}
        hidesignup={() => setModalSignUpShow(false)}
    />
  </>
  );
}

export default ModalSignIn;

