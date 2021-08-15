import styles from './app.module.css';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Menu from './components/menu/menu';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <Home />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
