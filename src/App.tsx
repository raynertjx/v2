import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import About from "./components/About";
import Hello from "./components/Hello";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="mx-auto max-w-[130ch]">
      <Header />
      <Hello />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
