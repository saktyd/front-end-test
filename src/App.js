import React from 'react';
import './style/main.scss';
import Notification from './components/Notification'
import HeroShot from './components/HeroShot'

function App() {
  return (
    <div className="App">
      <Notification/>
      <HeroShot/>
    </div>
  );
}

export default App;
