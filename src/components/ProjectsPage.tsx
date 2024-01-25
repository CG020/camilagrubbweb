import Divider from "./Divider";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect, useState } from 'react';

const ProjectsPage = () => {

    // fading animation between sections
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


    // collapsing content
    const [isCollapsed, setIsCollapsed] = useState(null);
    const toggleCollapse = (cardNum) => {
        setIsCollapsed(isCollapsed === cardNum ? null : cardNum);
    };

    const projSection = (cardNum) => ({
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: isCollapsed === cardNum ? 'column': 'row',
    });

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

    const imageStyle = {
        height:'100%',
    }

    const cardStyle = (cardNum) => ({
        width: '45vw',
        height: '55vh',
        margin: '0 auto',
        // position: isCollapsed == cardNum ? 'relative': 'relative',
        position: 'relative',
        zIndex: '1',
        transition: 'all 0.4s ease', 
        marginBottom: '20px',
    });

    const collapseStyle = (cardNum) => ({
        transition: 'transform 0.4s ease',
        overflow: 'hidden',
        zIndex: -1,
        position: 'absolute',
        left: '105%',
        top: '20px',
        width: '400px',
        transform: isCollapsed === cardNum ? 'translateX(0)' : 'translateX(-100%)',
        fontFamily: 'monospace',
        padding: '15px',
        border: 'solid',
        visibility: isCollapsed === cardNum ? 'visible' : 'collapse',
    });

    return(
        <div>
            <NavBar message={'my work so far as an undergrad'} tabs={['completed','in progress','workflow']}/>
            <section id="completed"> <h1 style={projHeader}><i>completed projects.</i></h1>
            <div style={projSection('c1')} className="fadeInSection">
                <div className="card text-bg-dark" style={cardStyle('c1')} onClick={() => toggleCollapse('c1')}>
                    <img src="src\assets\windowImage.jpg" style={imageStyle} className="card-img" alt="card"></img>
                    <div className={"card-img-overlay"}>
                        <h5 className="card-title" style={projTitle}>This Website</h5>
                        <p className="card-text" style={projText}>This website was created from scratch as a side project for frontend development
                        skills cultivation.</p>
                        <p className="card-text"><small>Repository found on GitHub</small></p>
                    </div>
                <div style={collapseStyle('c1')}>
                        A place where I can document my projects and update periodically. This project utilizes 
                        HTML, CSS, and JavaScript for construction and ReactJS for efficient component organization. Familiarity 
                        with these languages and how they interect with each other helps strengthen my web development skillset.
                </div> 
            </div> </div> 
            </section>

            <section id="in progress"> <h1 style={projHeader}><i>in progress.</i></h1>

            <div style={projSection('p1')} className="fadeInSection">
            <div className="card text-bg-dark" style={cardStyle('p1')} onClick={() =>  toggleCollapse('p1')}>
                <img src="src\assets\windowImage.jpg" style={imageStyle} className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" style={projTitle}>Dining Out</h5>
                    <p className="card-text" style={projText}>Dining Out is an idea to make a one source webscraping search that can
                    finalize deciding where to dine that would satisfy all peoples in a party.
                    <table></table></p>
                    <p className="card-text"><small>Repository found on GitHub</small><br></br>
                    <small>Click here to view</small></p></div>
                <div style={collapseStyle('p1')}>
                    This project not only cultivated my skills in designing independent tools using hosting
                    sources such as Netlify in this case, but it also helped me practice filtering algorithms 
                    and webscraping.
                </div> 
            </div> 
            
            <div className="card text-bg-dark" style={cardStyle('p2')} onClick={() => toggleCollapse('p2')}>
                <img src="src\assets\windowImage.jpg" style={imageStyle} className="card-img" alt="card"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title" style={projTitle}>Abstract Scroll</h5>
                    <p className="card-text" style={projText}>
                        A dynamic website where scrolling takes you through a narrative.
                    <table></table></p>
                    <p className="card-text"><small>Repository found on GitHub</small><br></br>
                    <small>Click here to view</small></p>
                </div>
                <div style={collapseStyle('p2')}>
                This project is practice dynamic website design using fluid CSS and JavaScript. 
                        The site is intended for the viewer to continuously scroll to progress and occasionally interact with
                        objects on the site for a storytelling and visually exciting experience. This is a test of coding skills 
                        and artisitic thinking.
                </div> 
            </div>
            
            </div> </section>

            <section id="workflow"> <h1 style={projHeader}><i>project workflow.</i></h1>
            <div style={projSection('w1')} className="fadeInSection">
            <div className="card text-bg-dark" style={cardStyle('w1')} onClick={() => toggleCollapse('w1')}>
            <img src="src\assets\windowImage.jpg" style={imageStyle} className="card-img" alt="card"></img>
            <div className="card-img-overlay">
                <h5 className="card-title" style={projTitle}>Project Workflow</h5>
                <p className="card-text" style={projText}>Brief steps on how I go about the project design process - employed based on experience.
                <table></table></p>
                <p className="card-text"><small>- - -</small></p>
            </div>
            <div style={collapseStyle('w1')}>
                Steps: <br></br>1. Identification of problem - <i>Can it be solved technologically?</i> <br></br>
                2. Decision of appropriate strcuture - <i>What language best suits the task? Is the solution an application 
                or a script? User friendly necessity?</i> <br></br>
                3. Planning details stage - <i>What is needed in the program? What is the optimal overarching structure and synthesis of components?
                    How to promote space efficiency and clean code?</i> <br></br>
                4. Testing - <i>Does it work? Does it work efficiently? Can it be improved? Do outside party testers approve?</i> <br></br>
                5. Improve project anyway.
                </div> 
            </div> </div> </section>

            <Footer song='Ocean Drive by Duke Dumont' book='Mythology by Edith Hamilton' doing='coding'></Footer>
        </div>
    );
}

export default ProjectsPage;