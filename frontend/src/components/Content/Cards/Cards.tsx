import { useEffect } from 'react';
import styles from './Cards.module.scss';
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { getCards } from '../../../store/cards/cardsSlice';
import Card from '../Card/Card';

const Cards = () => {
  const { token } = useAppSelector(({ user }) => user);
  const { cards } = useAppSelector(({ cards }) => cards);
  const dispatch = useAppDispatch()

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