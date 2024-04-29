import { useAppSelector } from "../../store/hook";

import Profile from "../../components/Content/Profile/Profile";
import Cards from "../../components/Content/Cards/Cards";

import { CombSpinner } from "react-spinners-kit";
import styles from './Main.module.scss';


export const Main = () => {
  const { isLoading } = useAppSelector(({ cards }) => cards);

  return (
    <main className={styles.main}>
      {isLoading
        ? (
          <div className={styles.mainSpinner}>
            <CombSpinner />
          </div>
        )
        : (
          <>
            <Profile />
            <Cards />
          </>
        )
      }
    </main>
  )
}

export default Main;