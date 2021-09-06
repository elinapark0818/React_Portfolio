import React from 'react';
import styles from './app.module.css';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import { useSpring, animated } from 'react-spring';
import Skills from './components/skills/skills';
import ContactBtn from './components/contact_btn/contact_btn';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import TopBtn from './components/topBtn/topBtn';

export default function App() {
  const display = useSpring({ 
    to: { opacity: 1}, from: { opacity: 0 } })

  return (
    <div className={styles.app}>
      <TopBtn/>
    <header className={styles.header}>
      <animated.div style={display}>
        <Home />
      </animated.div>
    </header>
    <main className={styles.main}>
      <Profile />
      <Skills />
      <Projects />
    </main>
    <footer className={styles.footer}>
      <ContactBtn />
      <Contact />/
    </footer>
  </div>
  );
}

