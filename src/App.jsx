import React from 'react';
import Length from './Length.jsx'
import './App.css';

function App() {
  return (
    <main>
      <div className="input">
        <input placeholder="Max character count" />
        <input placeholder="Max line count" />
      </div>
      <textarea placeholder="Type here to see the length of your input" />
      <Length />
    </main>
  );
}

export default App;