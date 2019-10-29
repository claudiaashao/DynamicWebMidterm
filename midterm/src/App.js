import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './containers/home';
import Plant from './containers/plant';



export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/plant" component={Plant} />
      </Router>

    </div>
  );
}


