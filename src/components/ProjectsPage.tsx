import Divider from "./Divider";
import NavBar from "./NavBar";
import { useEffect } from 'react';

const ProjectsPage = () => {

    const projSection: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    };

    const projHeader: React.CSSProperties = {
        marginLeft: '5px',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'playfair display',
        color: '#a2a2a2a0',
        fontSize: '70px',
    };

    const projText: React.CSSProperties = {
        fontFamily: 'monospace',
        marginRight: '20px',
        textAlign: 'center',
        fontSize: '1em',
        marginTop: '35px',
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fadeInSection');
    
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;
                const partiallyInView = sectionTop < window.innerHeight && sectionBottom >= 0;
                
                if (partiallyInView) {
                    section.classList.add('isVisible');
                } else {
                    section.classList.remove('isVisible');
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return(
        <div>
            <NavBar message={'some my work so far.'}/>
            <h1 style={projHeader}><i>completed projects.</i></h1>
            <div style={projSection} className="fadeInSection">
            <div className="card text-bg-dark">
                <img src="src\assets\windowImage.jpg" className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" >Project</h5>
                    <p className="card-text">placeholder</p>
                    <p className="card-text"><small>extra note</small></p>
                </div>
            </div>
            </div>

            <div style={projSection} className="fadeInSection">
            <div className="card text-bg-dark">
                <img src="src\assets\windowImage.jpg" className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" >This Website</h5>
                    <p className="card-text">placeholder</p>
                    <p className="card-text"><small>extra note</small></p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProjectsPage;