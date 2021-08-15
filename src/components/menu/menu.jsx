import React from 'react';
import styles from './menu.module.css';

const Menu = (props) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__menu}>
      <li className={styles.navbar__menu__item} data-link="#home">Home</li>
        <li className={styles.navbar__menu__item} data-link="#about">Profile</li>
        <li className={styles.navbar__menu__item} data-link="#skills">Skills</li>
        <li className={styles.navbar__menu__item} data-link="#projects">Projects</li>
        <li className={styles.navbar__menu__item} data-link="#contact">Contact</li>
      </ul>
    </nav>
  )
}

export default Menu;