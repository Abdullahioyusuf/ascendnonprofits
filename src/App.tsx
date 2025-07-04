import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resources from './components/Resources';
import Course from './components/Course';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Resources />
        <Course />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;