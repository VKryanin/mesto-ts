import { useState, useEffect } from 'react';
import { changeLikeCardStatus, deleteCard, selectCard, togglePopup } from '../../../store/cards/cardsSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { CardType } from '../../utils/Interface';
import styles from './Card.module.scss';

const Card: React.FC<{ card: CardType }> = ({ card }) => {
  const [isLike, setLike] = useState(false);
  const { showImage } = useAppSelector(({ cards }) => cards)
  const { user, token } = useAppSelector(({ user }) => user);
  const { _id, name, link, likes, owner } = card
  const isOwner = owner === user._id;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (likes.includes(user._id)) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [likes, user._id]);

  const handleCardClick = (card: {}) => {
    dispatch(togglePopup(!showImage))
    dispatch(selectCard(card))
  }

  const handleLike = () => {
    const updatedIsLiked = !isLike;
    setLike(updatedIsLiked);
    dispatch(changeLikeCardStatus({
      cardId: _id,
      isLiked: updatedIsLiked,
      token
    }));
  }

  const handleDelete = () => {
    dispatch(deleteCard({cardId: _id, token}))
  }

  return (
    <li
      className={styles.card}>
      <img
        className={styles.cardPhoto}
        src={link}
        alt={name}
        onClick={() => {
          handleCardClick(card)
        }}
      />
      <div className={styles.cardInfo}>
        <p className={styles.cardSubtitle}>{name}</p>
        <div className={styles.cardLikeWrapper}>
          <button
            className={`${styles.cardButton} ${isLike ? styles.cardButtonActive : ''}`}
            onClick={handleLike}
          ></button>
          <p className={styles.cardLikeCount}>
            {likes.length > 0 ? likes.length : null}
          </p>
        </div>
      </div>
      {isOwner && (
        <button
          className={styles.cardDelete}
          onClick={handleDelete}
        ></button>
      )}
    </li>
  )
}

export default Card;