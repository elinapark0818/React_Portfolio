import styles from './menu.module.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../home/home';
import Profile from '../profile/profile';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Contact from '../contact/contact';


export default function Menu() {
  return (
    <Router>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__item}><Link className={styles.link} to='/' component={Home} exact>Home</Link></li>
          <li className={styles.navbar__item}><Link className={styles.link} to='/profile' component={Profile} exact>Profile</Link></li>
          <li className={styles.navbar__item}><Link className={styles.link} to='/skills' component={Skills} exact>Skills</Link></li>
          <li className={styles.navbar__item}><Link className={styles.link} to='/projects' component={Projects} exact>Projects</Link></li>
          <li className={styles.navbar__item}><Link className={styles.link} to='/contact' component={Contact} exact>Contact</Link></li>
        </ul>
      </nav>
    </Router>
  )
}
