import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Vision from './Vision';
import Benefits from './Benefits';
import Data from './Data';
import Support from './Support';
import RefutingSaveOurSammamish from './RefutingSaveOurSammamish';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Benefits />
      <Data />
      <Support />
      <RefutingSaveOurSammamish />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
