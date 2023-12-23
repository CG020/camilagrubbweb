import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*all component imports*/ 
import ContactPage from './components/ContactPage';
import BioPage from './components/BioPage';
import ProjectsPage from './components/ProjectsPage';
import InvolvePage from './components/InvolvePage';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Panel from './components/Panel';
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
            <NavBar message='Welcome'/>
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
          <div className='container'>
            <Panel 
              title="Bio" 
              image="src\assets\bioImage.jpg" 
              content="Learn more about me and my background"
              onClick={<Route path="/bio" element={<BioPage />} />}
            />
            <Panel 
              title="Projects" 
              image="src\assets\projectsImage.jpg" 
              content="Portfolio of current and completed work" 
              onClick={<Route path="/projects" element={<ProjectsPage />} />}
            />
            <Panel 
              title="Involvement" 
              image="src\assets\projectsImage.jpg" 
              content="Where you can find me in the community"
              onClick={<Route path="/involve" element={<InvolvePage />} />}
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