import React from 'react';
import { BrowserRouter, Route, Router, Routes, } from 'react-router-dom'; // Import Switch component
import Action from './Action';
import Fantasy from './Fantasy';
import Home from './Home';
import Horror from './Horror';
import Sports from './Sports';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter> {/* Use Switch instead of switch */}
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/action" component={Action} />
          <Route path="/fantasy" component={Fantasy} />
          <Route path="/horror" component={Horror} />
          <Route path="/sports" component={Sports} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
