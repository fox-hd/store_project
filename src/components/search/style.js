import styled from 'styled-components'
import background from '../../images/back.jpg'

export const StyledCards = styled.div`
    .content-card {
    margin: 40px 0;
    .card{
      box-shadow: 0px 1px 2px rgba(55, 55, 55, 0.2);
      .card-text{
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        transition: all 3s;
      }
    }
    .card:hover{
      box-shadow: 2px 4px 5px rgba(55, 55, 55, 0.2);
      transform: scale(1.05);
    }
  }

`

export const StyledContent = styled.div`
  background: url(${background});
  height: 100vh;
  h1{
    font-size: 50px;
    margin: 30px 10% 0px;
  }
`
