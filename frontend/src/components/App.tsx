import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hook';
import { getProfile, hasToken } from '../store/userSlice';

import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import Main from '../pages/Main/Main';

import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { isLoggedIn } = useAppSelector(({ user }) => user);

  useEffect(() => {
    if (!isLoggedIn && localStorage.getItem('token')) {
      dispatch(hasToken());
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile());
      navigate('/', { replace: true })
    }
  }, [isLoggedIn]);

  return (
    <Routes location={location}>
      <Route path="/" element={isLoggedIn ? <Navigate to='/content' /> : <Navigate to='/sign-in' replace />} />
      <Route path='/sign-in' element={<LoginPage />} />
      <Route path='/sign-up' element={<SignupPage />} />
      <Route path="/content" element={<ProtectedRoute element={<Main />} />} />
    </Routes>
  );
}

export default App;
