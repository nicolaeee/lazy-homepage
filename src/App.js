import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import CanvasComponent from './components/CanvasComponent';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <CanvasComponent />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/my-work" element={<MyWork />} />
      </Routes>
    </div>
  );
}

export default App;

