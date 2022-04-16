import React from 'react';
import {Brand, CTA, Navbar } from './Components';
import {Footer, Header, GPT3, Possibility, Blog, Features} from './Containers';
import './App.css';


function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
     <h1>GPT-3</h1>
    </div>
  );
}

export default App;
