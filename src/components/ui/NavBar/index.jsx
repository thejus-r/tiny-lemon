import styles from "./style.module.css"
import "./style.css"


export default function NavBar() {
  return <header>
    <div className={styles.logoContainer}>
      <img className="logo" src="logo.svg" />
    </div>
    <nav className={styles.navBar}>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}><a href="/">About</a></li>
        <li className={styles.navLink}><a href="/menu">Menu</a></li>
        <li className={styles.navLink}><a href="/booking">Reservations</a></li>
        <li className={styles.navLink}><a href="/">Order Online</a></li>
        <li className={styles.navLink}><a href="/">Login</a></li>
      </ul>
    </nav >
  </header >
}
