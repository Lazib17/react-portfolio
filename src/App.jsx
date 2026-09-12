import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
