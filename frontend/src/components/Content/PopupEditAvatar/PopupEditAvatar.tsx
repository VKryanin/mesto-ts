import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import PopupWithForm from '../../Components/PopupWithForm/PopupWithForm';
import styles from '../PopupAddImage/PopupAddImage.module.scss';
import { toggleAvatarPopup } from '../../../store/popups/popupsSlice';
import { patchUserPhoto } from '../../../store/user/userSlice';

const PopupEditAvatar = () => {
  const dispatch = useAppDispatch()
  const avatarRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    dispatch(toggleAvatarPopup(false))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (avatarRef.current) {
      dispatch(patchUserPhoto({ avatar: avatarRef.current.value }))
    }
  }

  return (
    < PopupWithForm
      onClose={handleClose}
      onSubmit={handleSubmit}
      id='avatar-popup'
      title='Обновить аватар'
      type='user-avatar'
      buttonText='Сохранить' >
      <label htmlFor="avatar-input" className={styles.popupLabel}>
        <input name="avatar"
          className={styles.popupInput}
          id="avatar"
          placeholder="Введите ссылку на аватар"
          ref={avatarRef}
          type="url"
          minLength={2}
          maxLength={200}
          required />
        <span className={`${styles.popupSpan} ${styles.popupTextError}`}></span>
      </label>
    </PopupWithForm>
  )
};

export default PopupEditAvatar;