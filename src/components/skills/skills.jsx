import React from 'react'
import styles from './skills.module.css';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiJira } from "react-icons/si";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h1>Skills</h1>
        <ul className={styles.skill_category}>
        <li className={styles.skill_item}>
            <div className={styles.icon}>
              <SiHtml5 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div className={styles.icon}>
              <SiCss3 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div className={styles.icon}>
              <SiJavascript
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div className={styles.icon}>
              <SiReact 
              className={styles.skill_icon}
              />
            </div>
          </li>
        </ul>
        <h1>Etc...</h1>
        <ul className={styles.skill_category}>
        
          <li className={styles.skill_item}>
            <div>
              <SiPostcss 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiNetlify
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiGit 
              className={styles.skill_icon}
              />
            </div>
          </li>
          
          <li className={styles.skill_item}>
            <div>
              <SiReactrouter 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiGithub
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiVisualstudiocode 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiFirebase 
              className={styles.skill_icon}
              />
            </div>
          </li>
          <li className={styles.skill_item}>
            <div>
              <SiJira 
              className={styles.skill_icon}
              />
            </div>
          </li>
        </ul>
    </div>
  )
}