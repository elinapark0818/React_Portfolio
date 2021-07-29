import React from 'react';
import styles from './about.module.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiReact } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiYarn } from "react-icons/si";

const About = (props) => 
  <section className={styles.section}>

    <h1 className={styles.title}>✔ My Specification</h1>

    <div className={styles.skills}>
      <div className={styles.icon}>
        <FaHtml5 className={styles.i}/>
        <h3 className={styles.description}>HTML5</h3>
      </div>
      <div className={styles.icon}>
        <FaCss3Alt className={styles.i}/>
        <h3 className={styles.description}>CSS3</h3>
      </div>
      <div className={styles.icon}>
        <IoLogoJavascript className={styles.i}/>
        <h3 className={styles.description}>JavaScript</h3>
      </div>
      <div className={styles.icon}>
        <SiReact className={styles.i}/>
        <h3 className={styles.description}>React</h3>
      </div>
    </div>
    
    <h1 className={styles.title}>✔ Favorite Tools</h1>

    <div className={styles.tools}>
      <div className={styles.icon}>
        <SiPostcss className={styles.i}/>
        <h3 className={styles.description}>PostCSS</h3>
      </div>
      <div className={styles.icon}>
        <SiPostman className={styles.i}/>
        <h3 className={styles.description}>Postman</h3>
      </div>
      <div className={styles.icon}>
        <SiGit className={styles.i}/>
        <h3 className={styles.description}>Git</h3>
      </div>
      <div className={styles.icon}>
        <SiGithub className={styles.i}/>
        <h3 className={styles.description}>Github</h3>
      </div>
      <div className={styles.icon}>
        <SiVisualstudiocode className={styles.i}/>
        <h3 className={styles.description}>Visualstudio</h3>
      </div>
      <div className={styles.icon}>
        <SiNetlify className={styles.i}/>
        <h3 className={styles.description}>Netlify</h3>
      </div>
      <div className={styles.icon}>
        <SiYarn className={styles.i}/>
        <h3 className={styles.description}>Yarn</h3>
      </div>

    </div>
  </section>

export default About