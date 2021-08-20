import React from 'react'
import styles from './skills.module.css';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h1>Skills</h1>
        <ul className={styles.skill_category}>
          <li className={styles.skill_item}>
            <div className={styles.skill_icon}>
              <SiHtml5 
              className={styles.icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiCss3 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiJavascript
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiReact 
              className={styles.skill_icon}
              />
            </div>
          </li>
        </ul>
        <h1>Etc...</h1>
        <ul className={styles.skill_category}>
        <li className={styles.skill_item}>
            <div className={styles.skill_icon}>
              <SiHtml5 
              className={styles.icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiCss3 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiJavascript
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiReact 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div className={styles.skill_icon}>
              <SiHtml5 
              className={styles.icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiCss3 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiJavascript
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiReact 
              className={styles.skill_icon}
              />
            </div>
          </li>
        </ul>
    </div>
  )
}