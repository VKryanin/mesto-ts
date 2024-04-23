import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppSelector } from '../store/hook';

import LoginPage from '../pages/LoginPage';
import Header from './Header/Header';
import SignupPage from '../pages/SignupPage';
import Content from './Content/Content';
import '../styles/App.scss';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAppSelector(({ token }) => token)

  useEffect(
    () => {
      if (isLoggedIn) navigate('/', { replace: true });
    },
      [isLoggedIn]
  )

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={isLoggedIn ? <Navigate to='/' /> : <Navigate to='/sign-in' replace />} />
            <Route
              path='/sign-in'
              element={<LoginPage />}
            />
            <Route
              path='/sign-up'
              element={<SignupPage />}
            />
            <Route
              path='/'
              element={<Content />}
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
