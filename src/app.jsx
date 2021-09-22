import React from 'react';
import styles from './app.module.css';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import { useSpring, animated } from 'react-spring';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import TopBtn from './components/topBtn/topBtn';
import About from './components/about/about';
import { ThemeProvider } from 'styled-components';
import theme from "./style/theme";
import Test from './components/useref_scrollintoview/test';

export default function App() {
  const display = useSpring({ 
    to: { opacity: 1}, from: { opacity: 0 } })

  return (
    <ThemeProvider theme={theme}>

    <div className={styles.app}>
      <Test/>
      <TopBtn/>
    <header className={styles.header}>
      <animated.div style={display}>
        <Home />
      </animated.div>
    </header>
    <main className={styles.main}>
      <Profile />
      <About />
      <Skills />
      <Projects />
    </main>
    <footer className={styles.footer}>
      <Contact />
      
    </footer>
  </div>
    </ThemeProvider>
  );
}

