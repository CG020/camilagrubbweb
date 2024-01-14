import Divider from "./Divider";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from 'react';

const ProjectsPage = () => {

    const projSection: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        alignItems: 'center',
        flexWrap: 'wrap',
    };

    const projHeader: React.CSSProperties = {
        marginLeft: '5px',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'playfair display',
        color: '#a2a2a2a0',
        fontSize: '70px',
        marginBottom: '30px',
        marginTop: '30px',
    };

    const projText: React.CSSProperties = {
        fontFamily: 'monospace',
        marginRight: '20px',
        textAlign: 'center',
        fontSize: '1em',
        marginTop: '35px',
    };

    const cardStyle = {
        width: '45%',
        height: '250px',
        margin: '0 auto',
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fadeInSection');
    
            sections.forEach(section => {
                const top = section.getBoundingClientRect().top;
                const bottom = section.getBoundingClientRect().bottom;
                const middle = top < window.innerHeight && bottom >= 0;
                
                if (middle) {
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
            <section id="completed"> <h1 style={projHeader}><i>completed projects.</i></h1>
            <div style={projSection} className="fadeInSection">
            <div className="card text-bg-dark" style={cardStyle}>
                <img src="src\assets\windowImage.jpg" className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" >Project</h5>
                    <p className="card-text">placeholder</p>
                    <p className="card-text"><small>extra note</small></p>
                </div>
            </div> 

            <div className="card text-bg-dark" style={cardStyle}>
                <img src="src\assets\windowImage.jpg" className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" >This Website</h5>
                    <p className="card-text">This website was created from scratch as a side project for frontend development
                    skills cultivation. A place where I can document my projects and update periodically.</p>
                    <p className="card-text"><small>Repository found on GitHub</small></p>
                </div>
            </div>
            </div> </section>

            <section id="in progress"> <h1 style={projHeader}><i>in progress.</i></h1>

            <div style={projSection} className="fadeInSection">
            <div className="card text-bg-dark" style={cardStyle}>
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

            <section id="workflow"> <h1 style={projHeader}><i>project workflow.</i></h1>
            <div className="card text-bg-dark" style={cardStyle}>
            <img src="src\assets\windowImage.jpg" className="card-img" alt="card"></img>
            <div className="card-img-overlay">
                <h5 className="card-title" >Project Workflow</h5>
                <p className="card-text">How I go about the project design process - employed based on experience.
                <table></table></p>
                <p className="card-text"><small>Goal is high efficiency!</small></p>
            </div>
            </div> </section>

            <Footer song='Ocean Drive by Duke Dumont' book='Mythology by Edith Hamilton' doing='coding'></Footer>
        </div>
    );
}

export default ProjectsPage;