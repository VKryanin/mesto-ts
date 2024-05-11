import styles from './Cards.module.scss';
import { useAppSelector } from '../../../store/hook';

import Card from '../Card/Card';

const Cards = () => {
  const { cards } = useAppSelector(({ cards }) => cards);
  return (
    <section className={styles.cards}>
      <ul className={styles.cardsList}>
        {cards.map((card, index) => {
          return (
            <Card key={index} card={card} />
          )
        })}
      </ul>
    </section>
  )
}

export default Cards;