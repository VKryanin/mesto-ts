import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import PopupWithForm from '../../Components/PopupWithForm/PopupWithForm';
import styles from '../PopupAddImage/PopupAddImage.module.scss';
import { toggleAvatarPopup } from '../../../store/popups/popupsSlice';
import { patchUserPhoto } from '../../../store/user/userSlice';
import { toggleInfoTooltipPopup } from '../../../store/popups/popupsSlice';
import { useClickOutside } from '../../utils/helpers';

const PopupEditAvatar = () => {
  const dispatch = useAppDispatch()
  const avatarRef = useRef<HTMLInputElement>(null);
  const { editAvatar } = useAppSelector(({ popups }) => popups)
  const { message, imgPath, isLoading, isSuccess } = useAppSelector(({ user }) => user)
  const handleClose = () => {
    dispatch(toggleAvatarPopup(false))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {

    evt.preventDefault()
    if (avatarRef.current) {
      dispatch(patchUserPhoto({ avatar: avatarRef.current.value }))
    }
    dispatch(toggleInfoTooltipPopup({ isShow: true, message }))
    if (isSuccess) {
      console.log(1, isSuccess);

      handleClose();
    }
    if (!isLoading) {
      setTimeout(() => {
        dispatch(toggleInfoTooltipPopup({ isShow: false, message }));
      }, 700);
    }
  }

  const popupRef = useRef(null)
  useClickOutside(popupRef, () => {
    handleClose()
  })

  return (
    < PopupWithForm
      onClose={handleClose}
      onSubmit={handleSubmit}
      id='avatar-popup'
      title='Update avatar'
      type='user-avatar'
      buttonText='Save'
      isOpen={editAvatar}>
      <div ref={popupRef}>
        <label htmlFor="avatar-input" className={styles.popupLabel}>
          <input name="avatar"
            className={styles.popupInput}
            id="avatar"
            placeholder="Enter your avatar link"
            ref={avatarRef}
            type="url"
            minLength={2}
            maxLength={200}
            required />
          <span className={`${styles.popupSpan} ${styles.popupTextError}`}></span>
        </label>
      </div>

    </PopupWithForm>
  )
};

export default PopupEditAvatar;