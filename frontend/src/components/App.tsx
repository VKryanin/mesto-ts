import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Header from './Header/Header';
import SignupPage from '../pages/SignupPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to='/content' /> : <Navigate to='/sign-in' replace />} />
        <Route
          path='/sign-in'
          element={<LoginPage />}
        />
        <Route
          path='/sign-up'
          element={<SignupPage />}
        />
      </Routes>
    </>

  );
}

export default App;
