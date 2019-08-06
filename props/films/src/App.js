import React from 'react';
import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <>
    <Stars />
    <Stars count={2.5} />
    <Stars count={5} />
    </>
  );
}

export default App;
