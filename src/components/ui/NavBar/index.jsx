import styles from "./style.module.css"


export default function NavBar() {
  return <header className={styles.header}>
    <div className={styles.logoContainer}> Logo Goes here </div>
    <nav className={styles.navBar}>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}><a className={styles.links} href="/">Home</a></li>
        <li className={styles.navLink}><a href="/menu">Menu</a></li>
        <li className={styles.navLink}><a href="/booking">Book Table</a></li>
      </ul>
    </nav >
  </header >
}
