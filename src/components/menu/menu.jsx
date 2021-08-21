import styles from './menu.module.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../home/home';
import Profile from '../profile/profile';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import Nav from '../nav/nav';


export default function Menu() {
  return (
    <Router>
        <Switch>
          <Nav />
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
    </Router>
  )
}


//
      // <div className={styles.container}>
      //   <nav className={styles.navbar}>
      //     <ul className={styles.navbar__menu}>
      //       <li className={styles.navbar__item}><Link to="/" className={styles.link}>Home</Link></li>
      //       <li className={styles.navbar__item}><Link to="/profile" className={styles.link}>Profile</Link></li>
      //       <li className={styles.navbar__item}><Link to="/skills" className={styles.link}>Skills</Link></li>
      //       <li className={styles.navbar__item}><Link to="/projects" className={styles.link}>Projects</Link></li>
      //       <li className={styles.navbar__item}><Link to="/contact" className={styles.link}>Contact</Link></li>
      //     </ul>
      //   </nav>
      // </div>