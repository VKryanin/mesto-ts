import styles from './Card.module.scss';

type CardType = {
  _id: string,
  name: string,
  link: string,
  owner: string,
  likes: [],
  createdAt: string
}

const Card: React.FC<{ card: CardType }> = ({ card }) => {
  return (
    <li className={styles.card}>
      <img
        className={styles.cardPhoto}
        src={card.link}
        alt={card.name}
      />
      <div className={styles.cardInfo}>
        <p className={styles.cardSubtitle}>{card.name}</p>
        <div className={styles.cardLikeWrapper}>
          <button
            onClick={() => {
              // props.onCardLike(props.card);
            }}
          ></button>
          <p className={styles.cardLikeCount}>
            {card.likes.length > 0 ? card.likes.length : null}
          </p>
        </div>
      </div>
    </li>
  )
}

export default Card;