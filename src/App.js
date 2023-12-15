import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import GalleryPage from "./GalleryPage";
import ContactPage from "./ContactPage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <span className="navbar-title">Deepa's Interiors</span>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
