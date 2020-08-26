import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import WineBox from './components/WineBox';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Nav />
        <WineBox />
      </main>
    </div>
  );
}

export default App;
