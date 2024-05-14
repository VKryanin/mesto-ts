import styles from './PopupWithForm.module.scss';
import { AddImagePopupProps } from '../../utils/Interface';

const PopupWithForm: React.FC<AddImagePopupProps> = (props: AddImagePopupProps) => {
  
  return (
    <div
      className={props.isOpen
        ? `${styles.popup} ${styles.popupOpened}`
        : `${styles.popup}`} id={props.id}
    >
      <div className={styles.popupContainer} >
        <button
          type="button"
          className={styles.popupCloseForm}
          onClick={props.onClose}
          aria-label="Закрыть форму" />
        <h2 className={styles.popupTitle}>{props.title}</h2>
        <form
          name={props.type}
          onSubmit={props.onSubmit}
          className={styles.popupForm}>
          {props.children}
          <button
            type="submit"
            className={styles.popupSubmitButton}
            aria-label="Сохранить">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;