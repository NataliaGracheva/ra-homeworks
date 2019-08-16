import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  
const card1 = {
  title: 'Card title',
  text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  href: '#'
};

const card2 = {
  title: 'Special title treatment',
  text: 'With supporting text below as a natural lead-in to additional content.',
  href: '#'
};

  return (
    <React.Fragment>
      <Card {...card1}><img src="" className="card-img-top" alt="" /></Card>
      <Card {...card2}/>
    </React.Fragment>
    
  );
}

export default App;
