import React from 'react';
import styles from './contact.module.css';
import { SiGithub } from "react-icons/si";
import { SiGoogle } from "react-icons/si";
import { BrowserRouter, Link } from 'react-router-dom';

const Contact = (props) => {
  return (

    <BrowserRouter>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact Me💌</h1>
          <div className={styles.icon}>
            <ul className={styles.list}>
              <li>
                <Link to="/github">
                  <SiGithub className={styles.i}/>
                </Link>
              </li>
              <li>
                <Link to="/email">
                  <SiGoogle className={styles.i}/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </BrowserRouter>

  )
}

export default Contact;