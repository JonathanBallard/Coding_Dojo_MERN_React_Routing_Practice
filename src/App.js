import React from 'react';
import './App.css';
import {Router} from '@reach/router';

import HomeComponent from './components/Home/Home.js';
import NumberComponent from './components/Number/Number.js';
import HelloComponent from './components/Hello/Hello.js';
import ColorComponent from './components/Color/Color.js';

function App() {
  return (
    <div className="App">
        <Router>
            <HomeComponent path="/home"></HomeComponent>
            <NumberComponent path="/number/:num"></NumberComponent>
            <HelloComponent path="/hello/:word"></HelloComponent>
            <ColorComponent path="/hello/:word/:color1/:color2"></ColorComponent>
        </Router>
    </div>
  );
}

export default App;
