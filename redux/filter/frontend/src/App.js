import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';

function App() {
  return (
    <>
      <ServiceAdd />
      <ServiceList />
      {/* filter added */}
      <ServiceFilter />
    </>
  );
}

export default App;
