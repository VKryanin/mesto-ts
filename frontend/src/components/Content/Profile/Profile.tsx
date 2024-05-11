import styles from './Profile.module.scss'
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { toggleAvatarPopup, toggleImagePopup, toggleProfilePopup } from '../../../store/popups/popupsSlice';

const Profile = () => {
  const { user,  } = useAppSelector(({ user }) => user);
  const { avatar, name, about } = user;
  const { addImage, editProfile, editAvatar } = useAppSelector(({ popups }) => popups)
  const dispatch = useAppDispatch()

  return (
    <section className={styles.profile}>
      <div className={styles.profileContainer}>
        <img
          className={styles.profileAvatar}
          src={avatar}
          alt="Аватар пользователя"
        />
        <button
          type="button"
          className={styles.profileAvatarEdit}
          aria-label="Редактировать аватар профиля"
          onClick={() => dispatch(toggleAvatarPopup(!editAvatar))}
        />
        <div className={styles.profileInfo}>
          <h1 className={styles.profileTitle}>
            {name}
          </h1>
          <button
            type="button"
            className={`${styles.profileButtonEdit} ${styles.profileButton}`}
            title="Редактировать профиль"
            onClick={() => dispatch(toggleProfilePopup(!editProfile))}
          />
          <p className={styles.profileSubtitle}>
            {about}
          </p>
        </div>
      </div>
      <button
        type="button"
        className={`${styles.profileButtonAdd} ${styles.profileButton}`}
        title="Добавить фотографию"
        onClick={() => dispatch(toggleImagePopup(!addImage))}
      />
    </section>
  )
}

export default Profile