import React from 'react';
import styles from './contact.module.css';


import { SiGithub } from "react-icons/si";
import { SiGoogle } from "react-icons/si";

const Contact = (props) => {
  return (
    <section>

      <div className={styles.container}>
        <h1 className={styles.title}>Contact Me💌</h1>
        <div className={styles.icon}>
          <SiGithub className={styles.i}/>
          <p className={styles.description}>github.com/elinapark0818</p>
        </div>
        
        <div className={styles.email}>
          <SiGoogle className={styles.i}/>
          <p className={styles.description}>elinapark0818@gmail.com</p>
        </div>

      </div>
    </section>

  )
}

export default Contact;