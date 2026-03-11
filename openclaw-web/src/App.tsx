import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SnakeGame from './components/SnakeGame';

const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'snake'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#snake' || window.location.hash === '/snake') {
        setCurrentPage('snake');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'snake') {
    return <SnakeGame />;
  }

  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
