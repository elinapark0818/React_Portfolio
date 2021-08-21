import React from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__item}>
            <Link to="/" className={styles.link}>Home</Link></li>
          <li className={styles.navbar__item}>
            <Link to="/profile" className={styles.link}>Profile</Link></li>
          <li className={styles.navbar__item}>
            <Link to="/skills" className={styles.link}>Skills</Link></li>
          <li className={styles.navbar__item}>
            <Link to="/projects" className={styles.link}>Projects</Link></li>
          <li className={styles.navbar__item}>
            <Link to="/contact" className={styles.link}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
