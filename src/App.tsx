import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans text-[#1F2937] bg-[#F9FAFB] selection:bg-[#4CAF50]/20 selection:text-[#1F2937]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}
