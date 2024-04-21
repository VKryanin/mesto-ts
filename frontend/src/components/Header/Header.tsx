import styled from 'styled-components'
import Button from '../Components/Button'
import { Link, useLocation } from 'react-router-dom'

const HeaderDiv = styled.header`
  width:80%;
  display:flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  color: #fff;
`

const HeaderLogo = styled.div`
display: flex;

& h1 {
  font-size: 32px;
}

& h2 {
  font-size: 16px;
  font-wight: 100;
}
`

const Header = () => {
  const location = useLocation();

  return (
    <HeaderDiv>
      <HeaderLogo>
        <h1>Mesto</h1>
        <h2>Russia</h2>
      </HeaderLogo>
      {location.pathname === '/sign-in' && (<Button secondary as={Link} to='/sign-up'>Регистрация</Button>)}
      {location.pathname === '/sign-up' && (<Button secondary as={Link} to='/sign-in'>Войти</Button>)}
    </HeaderDiv>
  )
}

export default Header