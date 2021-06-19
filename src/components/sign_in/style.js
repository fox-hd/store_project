import styled from 'styled-components'

export const StyledAccount = styled.div`
  .align-content{
    display:flex;
    flex-direction: column;
    .registered{
      display: table-cell;
      h4{
        text-align: center;
      }
    }
  }

  .unregistered{
    display: table-cell;
    h4{
      text-align: center;
    }
    .btn {
      margin: 50px 110px;
    }
  }

  .forgotpassword{
    margin-left: 10px;
  }

  .welcome{
    display: flex;
    justify-content: center;
  }
  .logout{
    margin-left: 50%;
  }
`
