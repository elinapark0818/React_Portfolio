import React from 'react';
import styles from './navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <section className={styles.section}>
      <div className={styles.container}>
        
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__item}>Home</li>
          <li className={styles.navbar__item}>Profile</li>
          <li className={styles.navbar__item}>About</li>
          <li className={styles.navbar__item}>Projects</li>
          <li className={styles.navbar__item}>Contact</li>
        </ul>

      </div>
    </section>
    </nav>
    
  )
}


export default Navbar;