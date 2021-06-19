import React, {useEffect, useState} from 'react';
import {Table, Figure, Button} from 'react-bootstrap'
import {StyledTable} from './style'

function Cart(){
  const [data, setdata] = useState([])

  var total = []

  useEffect(() => {
    fetch('http://localhost/pwn/carrinho.php').then(res => res.json()).then(res => {setdata(res)});
  },[])

  function Apagar(){
    fetch("http://localhost/pwn/deletaCarrinho.php?");
    window.location.reload();
    alert("O Carrinho foi esvaziado!");
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
                <Button variant="primary" size="lg">
                  Finalizar Compra
                </Button>
              </div>
        </StyledTable>
        )
}

export default Cart;
