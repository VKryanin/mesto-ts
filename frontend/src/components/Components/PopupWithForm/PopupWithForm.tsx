import styles from './PopupWithForm.module.scss';

interface AddImagePopupProps {
  id: string;
  title: string;
  type: string;
  buttonText: string | null;
  onClose: () => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}


const PopupWithForm: React.FC<AddImagePopupProps> = (props: AddImagePopupProps) => {

  return (
    <div className={`${styles.popup} ${styles.popupOpened}`} id={props.id}>
      <div className={styles.popupContainer}>
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