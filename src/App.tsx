import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Panel from './components/Panel';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {
        <div>
          <NavBar />
          <Header />
          <div className='container'>
            <Panel 
              title="Bio" 
              image="src\assets\bioImage.jpg" 
              content="Learn more about me" 
            />
            <Panel 
              title="Projects" 
              image="src\assets\projectsImage.jpg" 
              content="Portfolio of current and completed work" 
            />
          </div>
        </div>
        } />
        <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </Router>
  );
}

export default App;