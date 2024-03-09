import Divider from "./Divider";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect, useState } from 'react';
import React, { useRef } from 'react';


const ProjectsPage = () => {
    const [expandedCards, setExpandedCards] = useState({ c1: false, p1: false, p2: false, w1: false });

    const toggleCollapse = (cardNum) => {
        setExpandedCards(prevState => ({ ...prevState, [cardNum]: !prevState[cardNum] }));
    };

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
        fontSize: 'calc(0.5em + 1vw)',
        marginLeft: '10px',
    };

    const projTitle: React.CSSProperties = {
        fontFamily: 'monospace',
        fontSize: 'calc(0.5em + 2vw)',
    };

    const imageStyle = {
        height:'100%',
    }

    const cardStyle = {
        width: '45vw',
        margin: '0 auto',
        position: 'relative',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        marginBottom: '20px',
    };

    const expandedContentStyle = {
        transition: 'max-height 0.6s ease-in-out, opacity 0.6s ease-in-out',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        position: 'relative',
        width: '100%',
        maxWidth: '40vw',
        zIndex: '2',
        maxHeight: '0',
        opacity: '0',
        overflow: 'hidden',
        background: '#f8f9fa',
        padding: '0 20px',
        fontFamily: 'monospace',
        fontSize: '20px',
    };

    const projectSections = [
        { id: 'completed', title: 'completed projects', 
        projects: [{cardId: 'c1', cardTitle: 'This Website',
        content: 'This website was created from scratch as a side project for frontend development skills cultivation.', 
        expandedContent: `A place where I can document my projects and update periodically. 
        This project utilizes HTML, CSS, and JavaScript for construction and ReactJS for 
        efficient component organization. Familiarity with these languages and how they 
        interact with each other helps strengthen my web development skillset.`}]},
        {id:'in progress', title: 'in progress',
        projects: [{cardId: 'p1', cardTitle: 'Dining Out',
        content: `Dining Out is an idea to make a one source webscraping search 
        that can finalize deciding where to dine that would satisfy all peoples in a party.`,
        expandedContent: `This project not only cultivated my skills in designing independent tools using hosting
        sources such as Netlify in this case, but it also helped me practice filtering algorithms 
        and webscraping.`},
        {cardId: 'p2', cardTitle:'Abstract Scroll',
        content: `A dynamic website where scrolling takes you through a narrative.`,
        expandedContent: `This project is practice dynamic website design using fluid CSS and JavaScript. 
        The site is intended for the viewer to continuously scroll to progress and occasionally interact with
        objects on the site for a storytelling and visually exciting experience. This is a test of coding skills 
        and artisitic thinking.`}]},
        {id: 'workflow', title: 'workflow',
        projects: [{cardId: 'w1', cardTitle: 'Project Workflow',
        content: `Brief steps on how I go about the project design process - employed based on experience.`,
        expandedContent:(<>Steps: <br></br>1. Identification of problem - <i>Can it be solved technologically?</i> <br></br>
        2. Decision of appropriate strcuture - <i>What language best suits the task? Is the solution an application 
        or a script? User friendly necessity?</i> <br></br>
        3. Planning details stage - <i>What is needed in the program? What is the optimal overarching structure and synthesis of components?
            How to promote space efficiency and clean code?</i> <br></br>
        4. Testing - <i>Does it work? Does it work efficiently? Can it be improved? Do outside party testers approve?</i> <br></br>
        5. Improve project anyway.</>)}]}
        ];
    
    const getDynamicExpandedStyle = (cardId) => ({
        ...expandedContentStyle,
        maxHeight: expandedCards[cardId] ? '500px' : '0',
        opacity: expandedCards[cardId] ? 1 : 0,
        padding: expandedCards[cardId] ? '20px' : '0 20px',
        margin: expandedCards[cardId] ? '20px' : '0',
    });

    return (
    <div>
        <NavBar message={'my work so far as an undergrad'} tabs={['completed', 'in progress', 'workflow']}/>
        {projectSections.map(({ id, title, projects }) => (
            <section key={id} id={id}>
                <h1 style={projHeader}><i>{title}.</i></h1>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', padding: '20px'}}>
                    {projects.map(({ cardId, cardTitle, content, expandedContent }) => (
                        <div key={cardId} className="fadeInSection" style={{width: '45vw', margin: '0 auto', position: 'relative', marginBottom: '20px'}}>
                            <div className="card text-bg-dark" onClick={() => toggleCollapse(cardId)} style={cardStyle}>
                                <img src="src/assets/windowImage.jpg" alt="card" style={imageStyle} className="card-img" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title" style={projTitle}>{cardTitle}</h5>
                                    <p className="card-text" style={projText}>{content}</p>
                                </div>
                                {expandedCards[cardId] && (
                                    <div style={getDynamicExpandedStyle(cardId)}>
                                        {expandedContent}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    
    ))}
        <Footer />
        </div>
    )
}


export default ProjectsPage;