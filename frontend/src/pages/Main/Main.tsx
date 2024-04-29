import Profile from "../../components/Content/Profile/Profile";
import Header from "../../components/Components/Header/Header";
import styles from './Main.module.scss'

import { useAppSelector } from "../../store/hook";
import { CombSpinner } from "react-spinners-kit";
import Cards from "../../components/Content/Cards/Cards";

export const Main = () => {
  const { user, isLoading } = useAppSelector(({ user }) => user)
  return (
    <main>
      <Header />
      {isLoading
        ? (
          <div className={styles.sectionSpinner}>
            <CombSpinner />
          </div>
        )
        : (
          <>
            <Profile />
            <Cards />
          </>
        )}
    </main>
  )
}

export default Main;