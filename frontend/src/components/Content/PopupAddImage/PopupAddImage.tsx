import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../store/hook';
import { toggleImagePopup } from '../../../store/popups/popupsSlice';
import PopupWithForm from "../../Components/PopupWithForm/PopupWithForm";
import styles from './PopupAddImage.module.scss';
import { addCard } from '../../../store/cards/cardsSlice';


const AddImagePopup = () => {
  const dispatch = useAppDispatch()
  const cardName = useRef<HTMLInputElement>(null);
  const cardLink = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (cardName.current && cardLink.current) {
      cardName.current.value = '';
      cardLink.current.value = '';
    }
  }, []);

  const handleClose = () => {
    dispatch(toggleImagePopup(false))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (cardName.current && cardLink.current) {
      dispatch(
        addCard({
          name: cardName.current.value,
          link: cardLink.current.value
        })
      );
    }
  }

  return (
    <PopupWithForm
      id='cards-popup'
      title='Новое место'
      type='mesto'
      buttonText='Создать'
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="place-name-input" className={styles.popupLabel}>
        <input id="place-name-input"
          type="text"
          className={styles.popupInput}
          name="placename"
          required
          placeholder="Название"
          minLength={2}
          maxLength={30}
          ref={cardName} />
        <span className={styles.popupInputError} />
      </label>
      <label htmlFor="place-image-input" className={styles.popupLabel}>
        <input id="place-image-input"
          type="url"
          className={styles.popupInput}
          name="placeimage"
          ref={cardLink}
          placeholder="Ссылка на картинку"
          required
        />
        <span className={styles.popupInputError} />
      </label>
    </PopupWithForm>
  )
}

export default AddImagePopup;