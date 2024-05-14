import { useAppDispatch, useAppSelector } from '../../../store/hook';
import closeIcon from '../../../images/Close_white.svg';

import styles from '../../Components/PopupWithForm/PopupWithForm.module.scss'
import { toggleInfoTooltipPopup } from '../../../store/popups/popupsSlice';

const InfoTooltip = () => {
  const { message, imgPath } = useAppSelector(({ user }) => user);
  const { Info } = useAppSelector(({ popups }) => popups)
  const dispatch = useAppDispatch()

  return (
    <div
      className={Info ? `${styles.popup} ${styles.popupOpened}` : `${styles.popup}`}
      onClick={() => dispatch(toggleInfoTooltipPopup({ Info: false }))}
    >
      <div className={`${styles.popupContainer} ${styles.popupMessage}`}>
        <img src={imgPath} alt='text' className={styles.popupImage} />
        <img
          className={styles.popupCloseForm}
          src={closeIcon}
          onClick={() => dispatch(toggleInfoTooltipPopup({ Info: false }))}
          alt='x'
        />
        <h2 className={styles.popupTitle}>{message}</h2>
      </div>
    </div>
  );
};

export default InfoTooltip;