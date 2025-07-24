import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import StarbyDemo from './StarbyDemo';

const bubbleSettings = [
  { size: 60, left: "10%", delay: "0s", duration: "18s" },
  { size: 40, left: "20%", delay: "-3s", duration: "15s" },
  { size: 80, left: "35%", delay: "-8s", duration: "22s" },
  { size: 25, left: "50%", delay: "-12s", duration: "12s" },
  { size: 55, left: "65%", delay: "-5s", duration: "20s" },
  { size: 35, left: "80%", delay: "-15s", duration: "16s" },
  { size: 45, left: "90%", delay: "-7s", duration: "19s" },
  { size: 70, left: "75%", delay: "-10s", duration: "14s" }
];

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
