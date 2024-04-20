import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to='/content' /> : <Navigate to='/sign-in' replace />} />
        <Route
          path='/sign-in'
          element={<LoginPage />}
        />
      </Routes>
    </>

  );
}

export default App;
