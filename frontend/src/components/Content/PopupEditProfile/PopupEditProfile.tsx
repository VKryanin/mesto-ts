import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import PopupWithForm from '../../Components/PopupWithForm/PopupWithForm';
import styles from '../PopupAddImage/PopupAddImage.module.scss'
import { toggleProfilePopup } from '../../../store/popups/popupsSlice';
import { patchUserData } from '../../../store/user/userSlice';

const PopupEditProfile = () => {
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();
  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.about);

  const handleClose = () => {
    dispatch(toggleProfilePopup(false))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(patchUserData({ name, about: description }))
  }



  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleDescription(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <PopupWithForm
      onClose={handleClose}
      onSubmit={handleSubmit}
      id='profile-popup'
      title='Редактировать профиль'
      type='profile'
      buttonText='Сохранить'
    >
      <label htmlFor="username-input" className={styles.popupLabel}>
        <input
          id="username-input"
          type="text"
          className={styles.popupInput}
          name="username"
          required
          placeholder="Ваше имя"
          minLength={2}
          maxLength={40}
          value={name || ''}
          onChange={handleName}
        />
        <span className="username-input-error popup__input-error" />
      </label>
      <label htmlFor="description-input" className={styles.popupLabel}>
        <input
          id="description-input"
          type="text"
          className={styles.popupInput}
          name="description"
          required
          placeholder="Ваш род занятий"
          minLength={2}
          maxLength={200}
          value={description || ''}
          onChange={handleDescription}
        />
        <span className={styles.popupInputError} />
      </label>
    </PopupWithForm>
  )
}

export default PopupEditProfile;