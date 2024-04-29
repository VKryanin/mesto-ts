import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerCopyright}>Created by <a className={styles.footerLink} href="https://vk-port.dev" target='_blank' rel="noreferrer">Vitaly Kryanin</a></p>
      <p className={styles.footerCopyright}>&copy; 2024 Mesto Russia</p>
    </footer>
  )
}

export default Footer