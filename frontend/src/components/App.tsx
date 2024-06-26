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
import ImagePopup from './Content/ImagePopup/ImagePopup';
import AddImagePopup from './Content/PopupAddImage/PopupAddImage';
import PopupEditProfile from './Content/PopupEditProfile/PopupEditProfile';
import PopupEditAvatar from './Content/PopupEditAvatar/PopupEditAvatar';
import InfoTooltip from './Content/InfoTooltip/InfoTooltip';

function App() {
  const { showImage } = useAppSelector(({ cards }) => cards);
  const { isLoggedIn, token, message, imgPath } = useAppSelector(({ user }) => user);
  const { addImage, editProfile, editAvatar, Info } = useAppSelector(({ popups }) => popups)
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Hi, I'm using image upload via link to save memory on the server. ^^,");

    if (!isLoggedIn && localStorage.getItem('token')) {
      dispatch(hasToken());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile());
      dispatch(getCards(token))
      navigate('/', { replace: true })
    }
  }, [dispatch, isLoggedIn, navigate, token]);

  return (
    <>
      <Header />
      <Routes location={location}>
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path="/" element={<ProtectedRoute element={<Main />} />} />
        <Route path="/" element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/sign-in" replace />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
      <ImagePopup />
      <AddImagePopup />
      <PopupEditProfile />
      <PopupEditAvatar />
      <InfoTooltip />
      {/* {showImage && <ImagePopup />} */}
      {/* {addImage && <AddImagePopup />} */}
      {/* {editProfile && <PopupEditProfile />} */}
      {/* {editAvatar && <PopupEditAvatar />} */}
      {/* {Info && <InfoTooltip />} */}
    </>
  );
}

export default App;
