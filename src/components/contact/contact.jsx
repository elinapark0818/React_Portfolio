import React from 'react';
import styles from './contact.module.css';


import { SiGithub } from "react-icons/si";
import { SiGoogle } from "react-icons/si";

const Contact = (props) => {
  return (
  <div className={styles.container}>
    <div className={styles.icon}>
      <SiGithub className={styles.i}/>
      <p className={styles.description}>github.com/elinapark0818</p>
    </div>
    <div className={styles.email}>
      <SiGoogle className={styles.i}/>
      <h1>elinapark0818@gmail.com</h1>
    </div>
  </div>

  )
}

export default Contact;