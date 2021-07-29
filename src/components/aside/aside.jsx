import React from 'react';
import styles from './aside.module.css';


const Aside = (props) => {
  return (
      <aside className={styles.aside}>
        <p className={styles.hello}>Hello strainger! 😄</p>
      </aside>
    
  )
}


export default Aside;