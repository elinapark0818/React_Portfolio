import styles from './app.module.css';
import About from './components/about/about';
import Aside from './components/aside/aside';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.menu}>
        <Navbar />
        <Aside />
      </header>
      <main className={styles.main}>
      <Profile />
      <About />
      <Projects />
      <Contact />
      </main>
    </div>
  );
}

export default App;
