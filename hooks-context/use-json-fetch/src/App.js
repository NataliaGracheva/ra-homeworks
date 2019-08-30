import React from 'react';
import './App.css';
import UseHook from './components/UseHook'

function App() {
  return (
    <div className="App">
      <h3>Is loading</h3>
      <UseHook url={'http://localhost:7070/loading'} />
      <h3>Getting data</h3>
      <UseHook url={'http://localhost:7070/data'} />
      <h3>Has error</h3>
      <UseHook url={'http://localhost:7070/error'} />
    </div>
  );
}

export default App;
