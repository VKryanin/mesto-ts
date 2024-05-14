import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import PopupWithForm from '../../Components/PopupWithForm/PopupWithForm';
import styles from '../PopupAddImage/PopupAddImage.module.scss'
import { toggleProfilePopup } from '../../../store/popups/popupsSlice';
import { patchUserData } from '../../../store/user/userSlice';
import { toggleInfoTooltipPopup } from '../../../store/popups/popupsSlice';
import { useClickOutside } from '../../utils/helpers';

const PopupEditProfile = () => {
  const { user, isLoading, message, isSuccess } = useAppSelector(({ user }) => user);
  const { editProfile } = useAppSelector(({ popups }) => popups);
  const dispatch = useAppDispatch();
  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.about);

  useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user.name, user.about]);

  const handleClose = () => {

    dispatch(toggleProfilePopup(false))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(patchUserData({ name, about: description }))
    dispatch(toggleInfoTooltipPopup({ isShow: true, message }))
    if (isSuccess) {
      handleClose();
    }
    if (!isLoading) {
      setTimeout(() => {
        dispatch(toggleInfoTooltipPopup({ isShow: false, message }));
      }, 700);
    }
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleDescription(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  const popupRef = useRef(null)
  useClickOutside(popupRef, () => {
    handleClose()
  })

  return (
    <PopupWithForm
      onClose={handleClose}
      onSubmit={handleSubmit}
      id='profile-popup'
      title='Edit profile'
      type='profile'
      buttonText='Save'
      isOpen={editProfile}
    >
      <div ref={popupRef}>
        <label htmlFor="username-input" className={styles.popupLabel}>
          <input
            id="username-input"
            type="text"
            className={styles.popupInput}
            name="username"
            required
            placeholder="Your name"
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
            placeholder="About you"
            minLength={2}
            maxLength={200}
            value={description || ''}
            onChange={handleDescription}
          />
          <span className={styles.popupInputError} />
        </label>
      </div>

    </PopupWithForm>
  )
}

export default PopupEditProfile;
