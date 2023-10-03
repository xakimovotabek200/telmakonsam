import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Action from './Action';
import Fantasy from './Fantasy';
import Horror from './Horror';
import Sports from './Sports';
import Navbar from './components/Navbar/Navbar';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path={"/action"} element={<Action />} />
          <Route path={"/fantasy"} element={<Fantasy />} />
          <Route path={"/horror"} element={<Horror />} />
          <Route path={"/sports"} element={<Sports />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
