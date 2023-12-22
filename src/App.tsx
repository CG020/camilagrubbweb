import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Panel from './components/Panel';
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Panel title="Panel 1" content="Content for panel 1" />
      <Header />
      
    </div>
  );
}

export default App;