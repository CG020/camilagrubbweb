import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

/*all component imports*/ 
import ContactPage from './components/ContactPage';
import BioPage from './components/BioPage';
import ProjectsPage from './components/ProjectsPage';
import InvolvePage from './components/InvolvePage';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Panel from './components/Panel';
import Divider from './components/Divider';

import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerOpacity = Math.max(1 - scrollY / 500, 0);

  return (
    <Router>
      <Routes>
        <Route path="/" element= {
          <div>
            <NavBar message='Welcome' tabs={['work','play','contacts']}/>
            <div style={{ opacity: headerOpacity }}>
            <Header />
          </div>
          <div className="profile-section">
            <div className="profile-text">
                <p>Hello, my name is Camila Grubb. <br></br>Welcome to my page! My field of study is 
                Computer Science. <br></br> Learn more in my Bio page below!</p>
              </div>
              <img src="src\assets\originalImage.jpg" className="profile-image" alt="Profile" />
          </div>
          <Divider title="work" align1='20px' align2='0px'></Divider>
          <div className='container'>
            <Link to="/bio">
            <Panel 
              title="bio" 
              image="src\assets\bioImage.jpg" 
              content="learn more about me and my background"
            /> </Link>
            <Link to="/projects">
            <Panel 
              title="projects" 
              image="src\assets\bioImage.jpg" 
              content="portfolio of current and completed work" 
            /> </Link>
            <Link to="/involve">
            <Panel 
              title="involvement" 
              image="src\assets\bioImage.jpg" 
              content="where you can find me in the community"
            /> </Link>
          </div>
          <Divider title="play" align1='auto' align2='20px'></Divider>
        </div>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/involve" element={<InvolvePage />} />
        </Routes>
    </Router>
  );
}

export default App;