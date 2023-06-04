import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Experience from './components/Experience';
import About from './components/About';
import Hello from './components/Hello';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  return (
    <main className='transition dark:bg-[#2d2d2d] dark:text-[#dfdfdf]'>
      <div className='mx-auto max-w-[120ch]'>
        <Header />
        <Hello />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
