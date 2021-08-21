import React from 'react';
import styles from './app.module.css';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import { useSpring, animated } from 'react-spring';
import Skills from './components/skills/skills';
import ContactBtn from './components/contact/contact_btn';
import Menu from './components/menu/menu';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

export default function App() {
  const display = useSpring({ 
    to: { opacity: 1}, from: { opacity: 0 } })

  return (
  <div className={styles.app}>
    <header className={styles.header}>
      <Menu />
      <animated.div style={display}>
      <Home />
      </animated.div>
      <ContactBtn />
    </header>
    <div className={styles.main}>
      <Profile />
      <Skills />
      <Projects />
    </div>
    <footer className={styles.footer}>
      <Contact />/
    </footer>
  </div>
  );
}

