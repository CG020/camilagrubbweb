import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Panel from './components/Panel';
import "./App.css";

function App() {
  return (
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
  );
}

export default App;