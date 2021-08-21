import React from 'react'
import styles from './contact_btn.module.css';

export default function ContactBtn() {
  function handleClick(e) {
    window.location.replace("/contact")
  }
  return (
    <div className={styles.container}>
      <button 
      onClick={handleClick}
      className={styles.contact_btn}
      >
        Contact Me!
      </button>
    </div>
  )
}
