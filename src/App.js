import React from 'react';
import './style/main.scss';
import Notification from './components/Notification'
import HeroShot from './components/HeroShot'
import HightLight from './components/Highlight'

function App() {
  return (
    <div className="App">
      <Notification/>
      <HeroShot/>
      <HightLight/>
    </div>
  );
}

export default App;
