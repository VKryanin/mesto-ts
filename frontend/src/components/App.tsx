import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Main from '../pages/Main/Main';
import Header from './Content/Header/Header';
import Footer from './Content/Footer/Footer';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

import { useAppDispatch, useAppSelector } from '../store/hook';
import { getProfile, hasToken } from '../store/user/userSlice';
import { getCards } from '../store/cards/cardsSlice';

function App() {
  const { isLoading } = useAppSelector(({ cards }) => cards);
  const { isLoggedIn, token } = useAppSelector(({ user }) => user);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && localStorage.getItem('token')) {
      dispatch(hasToken());
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile());
      dispatch(getCards(token))
      navigate('/', { replace: true })
    }
  }, [isLoggedIn]);
  console.log('location: ', location);

  return (
    <>
      <Header />
      <Routes location={location}>
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path="/" element={<ProtectedRoute element={<Main />} />} />
        <Route path="/" element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/sign-in" replace />} />
        <Route path="*" element={<div>404</div> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
