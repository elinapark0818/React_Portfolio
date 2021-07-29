import { className } from 'postcss-selector-parser';
import React from 'react';
import styles from './projects.module.css';

const Projects = (props) => {
  return (
    <section>
    <div className={styles.container}>
      <h1>프로젝트</h1>
    </div>

    </section>
  )
}

export default Projects;