import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
import About from './views/About'

function App() {
  return (
    <Router>
      <Route path="/" exact component={ Home }/>
      <Route path="/detail" exact component={ Detail }/>
      <Route path="/about" exact component={ About }/>
    </Router>  
  );
}

export default App;
