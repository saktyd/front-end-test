import React from 'react';
import './style/main.scss';
import Notification from './components/Notification'
import HeroShot from './components/HeroShot'
import HightLight from './components/Highlight'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="App">
      <Notification/>
      <HeroShot/>
      <HightLight/>
      <Footer/>
      <Newsletter/>
    </div>
  );
}

export default App;
