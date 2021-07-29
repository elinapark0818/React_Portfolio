import React from 'react';
import styles from './contact.module.css';
import { SiGithub } from "react-icons/si";

const Contact = (props) => {
  return (
  <div className={styles.container}>
    <div className={styles.icon}>
      <SiGithub className={styles.i}/>
      <p className={styles.description}>github.com/elinapark0818</p>
    </div>
    <h1>email : elinapark0818@gmail.com</h1>
  </div>

  )
}

export default Contact;