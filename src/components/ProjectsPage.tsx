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
            <NavBar message={'my work so far'} tabs={['completed','in progress','workflow']}/>
            <h1 style={projHeader}><i>completed projects.</i></h1>
            <section id="completed"> <div style={projSection} className="fadeInSection">
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
                    <p className="card-text">This website was created from scratch as a side project I can update at 
                    leisure so I can document my projects.</p>
                    <p className="card-text"><small>Repository found on GitHub</small></p>
                </div>
            </div>
            </div> </section>

            <h1 style={projHeader}><i>in progress.</i></h1>

            <section id="in progress"> <div style={projSection} className="fadeInSection">
            <div className="card text-bg-dark">
                <img src="src\assets\windowImage.jpg" className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" >Dining Out</h5>
                    <p className="card-text">Deciding where to dine that would satisfy all peoples in a party 
                    can be difficult. Dining Out is an idea to make a one source webscraping search that can
                    finalize that decision.<table></table></p>
                    <p className="card-text"><small>Repository found on GitHub</small></p>
                </div>
            </div> 
            </div> </section>

            <h1 style={projHeader}><i>project workflow.</i></h1>
        </div>
    );
}

export default ProjectsPage;