import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = (props) => {

  return (
    <BrowserRouter>
      <nav className={styles.navbar}>
        <section className={styles.section}>
          <div className={styles.container}>
            <ul className={styles.navbar__menu}>
              <li className={styles.navbar__item}
                >
                  <Link to="/">Home</Link>
                </li>
              <li className={styles.navbar__item}
                >
                  <Link to="/profile">Profile</Link>
                </li>
              <li className={styles.navbar__item}
                >
                  <Link to="/about">About</Link>
                </li>
              <li className={styles.navbar__item}
                >
                  <Link to="/project">Projects</Link>
                </li>
              <li className={styles.navbar__item}
                >
                  <Link to="/contact">Contact</Link>
                </li>
            </ul>
          </div>
        </section>
      </nav>
      </BrowserRouter>
    )
  }

export default Navbar;