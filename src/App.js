import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Counter from './components/Counter';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
