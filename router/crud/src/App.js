import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import CreatePage from './components/CreatePage';
import ViewPage from './components/ViewPage';
import EditPage from './components/EditPage';
import NotFoundPage from './components/NotFoundPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" exact component={MainPage} />
          <Route path="/posts/new" component={CreatePage} />
          <Route path="/posts/:id/:edit" component={EditPage} />
          <Route path="/posts/:id" component={ViewPage} />
          <Route path="*" component={NotFoundPage} />    

        </Switch>
      </Router>
    </div>
  );
}

export default App;
