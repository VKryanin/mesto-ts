import React from 'react';
import style from './Header.module.scss'
import logo from '../../../images/logo.svg'
import Button from '../../Components/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { logout } from '../../../store/user/userSlice';

const Header = () => {
  const location = useLocation();
  const { user, isLoggedIn } = useAppSelector(({ user }) => user)
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className={style.header}>
      <img className={style.headerLogo} src={logo as string} alt='Mesto Russia' />
      {location.pathname === '/sign-in' && (<Button secondary className={style.headerButton} as={Link} to='/sign-up'>Sign up</Button>)}
      {location.pathname === '/sign-up' && (<Button secondary className={style.headerButton} as={Link} to='/sign-in'>Sign In</Button>)}
      {isLoggedIn &&
        <div className={style.headerAuth}>
          <p>{user.email}</p>
          <Button primary type="submit" as='button' onClick={() => handleLogout()}>Log out</Button>
        </div>
      }
    </header>
  )
}

export default Header