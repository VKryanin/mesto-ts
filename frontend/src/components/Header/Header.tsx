import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <div>
        <h1>Mesto</h1>
        <h2>Russia</h2>
      </div>
      <Button as={Link} to='/test' background={false}>Войти</Button>
    </header>
  )
}

export default Header