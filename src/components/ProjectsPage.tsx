import Divider from "./Divider";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect, useState } from 'react';

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
        fontSize: '16px',
        marginLeft: '10px',
    };

    const projTitle: React.CSSProperties = {
        fontFamily: 'monospace',
        fontSize: '30px',
    };

    const cardStyle = {
        width: '45%',
        height: '250px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '1',
    };

    const imageStyle = {
        height:'100%',
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


    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const collapseStyle: React.CSSProperties = {
        transition: 'transform 0.4s ease',
        overflow: 'hidden',
        zIndex: -1,
        position: 'absolute',
        left: '100%',
        top: 0,
        width: '400px',
        transform: isCollapsed ? 'translateX(0)' : 'translateX(-100%)',
        fontFamily: 'monospace',
        padding: '15px',
        border: 'solid',
        visibility: isCollapsed ? 'visible' : 'hidden',
    }

    return(
        <div>
            <NavBar message={'my work so far'} tabs={['completed','in progress','workflow']}/>
            <section id="completed"> <h1 style={projHeader}><i>completed projects.</i></h1>
            <div style={projSection} className="fadeInSection">
                <div className="card text-bg-dark" style={cardStyle} onClick={toggleCollapse}>
                    <img src="src\assets\windowImage.jpg" style={imageStyle} className="card-img" alt="card"></img>
                    <div className={"card-img-overlay"}>
                        <h5 className="card-title" style={projTitle}>This Website</h5>
                        <p className="card-text" style={projText}>This website was created from scratch as a side project for frontend development
                        skills cultivation.</p>
                        <p className="card-text"><small>Repository found on GitHub</small></p>
                    </div>
                <div style={collapseStyle}>
                        A place where I can document my projects and update periodically. This project utilizes 
                        HTML, CSS, and JavaScript for construction and ReactJS for efficient component organization. Familiarity 
                        with these languages and how they interect with each other helps strengthen my web development skillset.
                </div> 
            </div> </div> 
            </section>

            <section id="in progress"> <h1 style={projHeader}><i>in progress.</i></h1>

            <div style={projSection} className="fadeInSection">
            <div className="card text-bg-dark" style={cardStyle} onClick={toggleCollapse}>
                <img src="src\assets\windowImage.jpg" style={imageStyle} className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" style={projTitle}>Dining Out</h5>
                    <p className="card-text" style={projText}>Dining Out is an idea to make a one source webscraping search that can
                    finalize deciding where to dine that would satisfy all peoples in a party.
                    <table></table></p>
                    <p className="card-text"><small>Repository found on GitHub</small><br></br>
                    <small>Click here to view</small></p></div>
                <div style={collapseStyle}>
                    This project not only cultivated my skills in designing independent tools using hosting
                    sources such as Netlify in this case, but it also helped me practice filtering algorithms 
                    and webscraping.
                </div> 
            </div> 
            
            <div className="card text-bg-dark" style={cardStyle} onClick={toggleCollapse}>
                <img src="src\assets\windowImage.jpg" style={imageStyle} className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" style={projTitle}>Abstract Scroll</h5>
                    <p className="card-text" style={projText}>
                        A dynamic website where scrolling takes you through a narrative.
                    <table></table></p>
                    <p className="card-text"><small>Repository found on GitHub</small><br></br>
                    <small>Click here to view</small></p>
                </div>
                <div style={collapseStyle}>
                This project is practice dynamic website design using fluid CSS and JavaScript. 
                        The site is intended for the viewer to continuously scroll to progress and occasionally interact with
                        objects on the site for a storytelling and visually exciting experience. This is a test of coding skills 
                        and artisitic thinking.
                </div> 
            </div>
            
            </div> </section>

            <section id="workflow"> <h1 style={projHeader}><i>project workflow.</i></h1>
            <div className="card text-bg-dark" style={cardStyle}>
            <img src="src\assets\windowImage.jpg" style={imageStyle} className="card-img" alt="card"></img>
            <div className="card-img-overlay">
                <h5 className="card-title" style={projTitle}>Project Workflow</h5>
                <p className="card-text" style={projText}>How I go about the project design process - employed based on experience.
                <table></table></p>
                <p className="card-text"><small>Goal is high efficiency!</small></p>
            </div>
            </div> </section>

            <Footer song='Ocean Drive by Duke Dumont' book='Mythology by Edith Hamilton' doing='coding'></Footer>
        </div>
    );
}

export default ProjectsPage;