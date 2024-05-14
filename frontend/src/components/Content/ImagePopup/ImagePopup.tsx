import { selectCard, togglePopup } from '../../../store/cards/cardsSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import styles from './ImagePopup.module.scss';

const ImagePopup = () => {
  const { showImage, selectedCard } = useAppSelector(({ cards }) => cards);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(togglePopup(!showImage))
    dispatch(selectCard({}))
  }

  return (
    <div
      className={`${styles.popup}  ${showImage ? styles.popupOpened : ''}`}
      id={selectedCard._id}
    >
      <div className={`${styles.popupContainer} ${styles.popupFullscreen}`} >
        <div>
          <figure className={styles.popupPhoto}>
            <button
              type="button"
              className={`${styles.popupCloseForm} ${styles.popupCloseImage}`}
              onClick={handleClose}
              aria-label="Закрыть"
            />
            <img
              src={selectedCard.link}
              className={styles.popupImage}
              alt={selectedCard.name}

            />
            <figcaption className={styles.popupSubtitle}>{selectedCard.name}</figcaption>
          </figure>
        </div>

      </div>
    </div>
  )
}

export default ImagePopup;