import React, { useState } from 'react';
import './style/main.scss';
import Notification from './components/Notification'
import Header from './components/Header'
import HightLight from './components/Highlight'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'

function App() {

  const [showNewsletter, setShowNewsletter] = useState(false)

  const handleScroll = e => {
    let element = e.target
    let targetHeight = parseInt((element.scrollHeight / 3).toFixed(0))
    if (targetHeight <=  element.scrollTop + element.clientHeight && !showNewsletter) {
      setShowNewsletter(true)
    }
  }
  return (
    <div className="App" onScroll={handleScroll}>
      <Notification/>
      <Header/>
      <HightLight/>
      <Footer/>
      <Newsletter showNewsletter={showNewsletter} />
    </div>
  );
}

export default App;
