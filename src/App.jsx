import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import StarbyDemo from './StarbyDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/starby-demo" element={<StarbyDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
