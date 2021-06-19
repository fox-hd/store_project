import React from 'react';
import {Table, Figure, Button} from 'react-bootstrap'

import {StyledTable} from './style'

function Cart(props){
  function ClosedBuy(){
    alert("Compra finalizada!")
  }
  console.log(props.location.data)

  return(
    <StyledTable>
      <h1>Carrinho</h1>
      <Table striped bordered hover size="lg" className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qtd.</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          data.map()
          <tr>
            <td><Figure.Image
                width={50}
                height={50}
                src={""}/><span>{props.location.data.nome}</span>
            </td>
            <td>1</td>
            <td>{props.location.data.preco}</td>
          </tr>
          <tr>
            <td><Figure.Image
                width={50}
                height={50}
                src={""}/><span>Headphone Basike Fone de Ouvido Bluetooth </span>
            </td>
            <td>1</td>
            <td>R$ 179,90</td>
          </tr>
          <tr>
            <td colSpan="2"><h3>Total</h3>
            </td>
            <td><b>R$ 3.978,90</b></td>
          </tr>
        </tbody>
      </Table>
        <div className="cart-button">
          <Button variant="secondary" size="lg">
            Limpar Carrinho
          </Button>
          <Button variant="primary" size="lg" onClick={ClosedBuy}>
            Finalizar Compra
          </Button>
        </div>
    </StyledTable>
  )
}

export default Cart;
