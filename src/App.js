import React from 'react';
import './style/main.scss';
import Notification from './components/Notification'
import HeroShot from './components/HeroShot'
import HightLight from './components/Highlight'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Notification/>
      <HeroShot/>
      <HightLight/>
      <Footer/>
    </div>
  );
}

export default App;
