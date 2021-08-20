import React from 'react';
import styles from './app.module.css';
import Home from './components/home/home';
import Profile from './components/profile/profile';
// import Projects from './components/projects/projects';
// import Contact from './components/contact/contact';
// import Menu from './components/menu/menu';
// import Skills from './components/skills/skills';
import { useSpring, animated } from 'react-spring';
import Skills from './components/skills/skills';
// import Star from './components/star/star';

function App() {
  const display = useSpring({ 
    to: { opacity: 1, marginTop: 0}, from: { opacity: 0, marginTop: -500 } })

  return (
  <div className={styles.app}>
    <div className={styles.header}>
      <animated.div style={display}>
        <Home />
      </animated.div>
    </div>
    <div className={styles.main}>
      <Profile />
      <Skills />
    </div>
  </div>
  );
}

export default App;
