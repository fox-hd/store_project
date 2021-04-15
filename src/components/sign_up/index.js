import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import FormSignUp from './form'


function ModalSignUp(props) {
  const returnPreviousModal = () =>{
    props.hidesignup()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Entre com seus dados para criar uma conta</h4>
        <FormSignUp />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={returnPreviousModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSignUp;
