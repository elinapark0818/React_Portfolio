import React, { Component ,Fragment } from 'react';
import styles from './app.module.css';
import Home from './components/home/home';
import Profile from './components/profile/profile';
// import Projects from './components/projects/projects';
// import Contact from './components/contact/contact';
// import Menu from './components/menu/menu';
// import Skills from './components/skills/skills';
import { useSpring, animated, Trail } from 'react-spring';
import LoopTrue from './components/loop/loop';
import Star from './components/star/star';

function App() {
  const display = useSpring({ 
    to: { opacity: 1, marginTop: 0}, from: { opacity: 0, marginTop: -500 } })

  return (
    <div className={styles.app}>
      <animated.div style={display}>
        <Home />
      </animated.div>
      <LoopTrue />
      <Star />
    </div>
  );
}

export default App;
