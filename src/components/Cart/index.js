import React, {useEffect, useState, useContext} from 'react';
import {Table, Figure, Button, Alert} from 'react-bootstrap'
import {StyledTable} from './style'
import {LoginContext} from '../Context/LoginContext'

function Cart(){
  const {codcli} = useContext(LoginContext);
  const [data, setdata] = useState([])
  const [limpar, setLimpar] = useState()
  const [pagar, setPagar] = useState()

  var total = []

  useEffect(() => {
    fetch(`http://localhost/pwn/carrinho.php?cod_cli=${codcli}`).then(res => res.json()).then(res => {setdata(res)});
  },[limpar])

  function Apagar(){
    fetch(`http://localhost/pwn/deletaCarrinho.php?cod_cli=${codcli}`);
    alert("O Carrinho foi esvaziado!");
    setLimpar(1)
    alert()
  }
  function alert(){
    return (
      <Alert variant="primary">
        O Carrinho foi esvaziado
      </Alert>
    )
  }

  function Comprar(){
    setPagar(1)
  }

  function finalizarcompra(){
    return (
      <Alert variant="success">
        Sua compra foi processada
      </Alert>
    )
  }

  function Total(){
    {data.map((valores)=>{
      total.push(parseFloat(valores.preco))
    }
    )}
    return(
      total.reduce((a,b)=>a+b,0).toFixed(2)
    )
  }
        return(
        <StyledTable>
          {limpar && alert()}
          {pagar && finalizarcompra()}
          <h1>Carrinho</h1>
          <Table striped bordered hover size="lg" className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qtd.</th>
                <th>Valor</th>
              </tr>
            </thead>
              {data.map((carrinho)=>{
                return(
                  <tbody key={carrinho.produto}>
                    <tr>
                      <td><Figure.Image
                        width={50}
                        height={50}
                        src={`/images/${carrinho.cod_produto}.jpg`}/><span>{carrinho.produto}</span>
                      </td>
                      <td>1</td>
                      <td>R$ {carrinho.preco}</td>
                    </tr>
                    </tbody>
                  )
                } 
              )
              }
            <tr>
              <td colSpan="2"><h2>Total</h2></td>
              <td><b>R$ {Total()}</b></td>
            </tr>
          </Table>
              <div className="cart-button">
                <Button type="submit" variant="secondary" size="lg" onClick={Apagar}>
                  Limpar Carrinho
                </Button>
                <Button variant="primary" size="lg" onClick={Comprar}>
                  Finalizar Compra
                </Button>
              </div>
        </StyledTable>
        )
}

export default Cart;
