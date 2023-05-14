import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Product />
      <Footer />
    </div>
  )
}

export default App;