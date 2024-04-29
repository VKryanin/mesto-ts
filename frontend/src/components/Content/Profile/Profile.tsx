import styles from './Profile.module.scss'
import { useAppSelector, useAppDispatch } from '../../../store/hook';

const Profile = () => {
  const { user, token, isLoggedIn } = useAppSelector(({ user }) => user)
  const { email, avatar, name, about } = user
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
        // onClick={props.onEditAvatar} 
        />
        <div className={styles.profileInfo}>
          <h1 className={styles.profileTitle}>
            {name}
          </h1>
          <button
            type="button"
            className={`${styles.profileButtonEdit} ${styles.profileButton}`}
            title="Редактировать профиль"
          // onClick={props.onEditProfile}
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
      // onClick={props.onEditAddPhoto} 
      />
    </section>
  )
}

export default Profile