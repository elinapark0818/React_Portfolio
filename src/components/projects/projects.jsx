import React from 'react';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
          <div className={styles.title}>
          <button className={styles.projects_btn}>Projects</button>
          </div>

          <header className={styles.categories}>
            <button 
            className={styles.category_btn}
            datatype="*">
              All <span className={styles.category_count}>7</span>
            </button>
            <button 
            className={styles.category_btn}
            datatype="Website">
              Website<span className={styles.category_count}>4</span>
            </button>
            <button 
            className={styles.category_btn}
            datatype="MiniGame">
              Mini-games<span className={styles.category_count}>3</span>
            </button>

          </header>
      </div>
    </div>
  )
}