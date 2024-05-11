import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { toggleImagePopup } from '../../../store/popups/popupsSlice';
import PopupWithForm from "../../Components/PopupWithForm/PopupWithForm";
import styles from './AddImagePopup.module.scss';


const AddImagePopup = () => {
  const { addImage } = useAppSelector(({ popups }) => popups);
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

  return (
    <PopupWithForm
      id='cards-popup'
      title='Новое место'
      type='mesto'
      buttonText='Создать'
      onClose={handleClose}
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