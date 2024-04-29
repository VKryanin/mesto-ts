import styles from './Content.module.scss'
import { useAppSelector } from "../../store/hook";
import { CombSpinner } from "react-spinners-kit";
import Profile from './Profile/Profile';




const Content: React.FC = () => {
  const { user, isLoading } = useAppSelector(({ user }) => user)
  const { _id, name, email, avatar } = user
  return (
    <section className={styles.section}>
      {isLoading
        ? (
          <div className={styles.sectionSpinner}>
            <CombSpinner />
          </div>
        )
        : (
          <>
            <Profile />
          </>
        )}
    </section>

  )
}

export default Content;