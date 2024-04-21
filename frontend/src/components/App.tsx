import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoginPage from '../pages/LoginPage';
import Header from './Header/Header';
import SignupPage from '../pages/SignupPage';
import Content from './Content/Content';
import '../styles/App.scss';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={loggedIn ? <Navigate to='/content' /> : <Navigate to='/sign-in' replace />} />
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
