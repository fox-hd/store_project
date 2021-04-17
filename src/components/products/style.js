import styled from 'styled-components'

export const StyledProduct = styled.div`

  img{
    width: 500px;
    height: 500px;
  }
  .title{
    text-align: center;
    font-size: 24px;
    margin: 40px 0 80px 0;
  }
  .product{
    .description {
        font-size: 24px;
        text-align: left;
      }
      .price{
        font-size: 28px;
        text-align: left;
        color: rgb(19, 137, 144);
        font-weight: 700;
        margin-top:10px;  
        margin-bottom: 0;

      }
      .payment img{
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }
      .buy{
        margin-right: 40px;
      }
      .info-footer{
        font-size: 0.875rem;
      }
    }
  }


`
