import React from 'react';
import './App.css';
import { User } from './features/user/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        <User />
      </header>
    </div>
  );
}

export default App;
