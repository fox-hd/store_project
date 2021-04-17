import React from 'react';
import {Table, Figure, Button} from 'react-bootstrap'
import notebook3 from '../../images/notebook-samsung.jpg'
import headphone from '../../images/headphone.jpg'
import {StyledTable} from './style'

function Cart(){
  function ClosedBuy(){
    alert("Compra finalizada")
  }
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
          <tr>
            <td><Figure.Image
                width={50}
                height={50}
                src={notebook3}/><span>Notebook Samsung Expert GfX X40 Intel Core i5, 8GB RAM</span>
            </td>
            <td>1</td>
            <td>R$ 3.799,00</td>
          </tr>
          <tr>
            <td><Figure.Image
                width={50}
                height={50}
                src={headphone}/><span>Headphone Basike Fone de Ouvido Bluetooth </span>
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