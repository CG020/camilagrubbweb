import Divider from "./Divider";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from 'react';
import { useState } from 'react';

const BioPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const bioSection: React.CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        boxSizing: 'border-box',
        margin: '40px'
    };

    const headerText: React.CSSProperties = {
        marginLeft: '5px',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'playfair display',
        color: '#a2a2a2a0',
        fontSize: '70px',
    };

    const bioImage: React.CSSProperties = {
        width: '26vw',
        height: 'auto',
        marginLeft: '20px',
        marginRight: '20px',
        padding: '30px',
        borderRadius: '50px',
        maxWidth: '100%',
        filter: 'grayscale(40%)',
    };

    const bioText: React.CSSProperties = {
        fontFamily: 'monospace',
        marginRight: '20px',
        textAlign: 'center',
        fontSize: 'calc(0.5em + 1vw)',
        whiteSpace: 'normal',
        marginTop: '35px',
        maxWidth: '100%',
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fadeInSection');
    
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;
                const middle = sectionTop < window.innerHeight && sectionBottom >= 0;
                
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
            <NavBar message={'my journey so far'} tabs={['academics','research','experience','personal']}/>
            <h1 style={headerText}><i><b>Hi! My name is<br></br> Camila Grubb</b></i></h1>
            <div style={bioSection} className="fadeInSection responsive-section">
                <img src="src\assets\bioProfile.jpg" className="profile-image" alt="BioProfile" style={bioImage} />
                <p style={bioText}>I am a current alumni at the University of Arizona completing my B.S. in Computer Science, my
                    minor in Business Administration at Eller College, and my certification in Cybersecurity at UA South.<br></br>
                    <br></br> Over the past 4 years I have cultivated my coding and problem solving skills be it within the classroom,
                    in the workplace, or on my own spare time.
                </p>
            </div>
            <div>
                <section id="academics"> <Divider title="Academics" align1='20px' align2='0px'></Divider>
                <div style={bioSection} className="fadeInSection responsive-section">
                <p style={bioText}> As a Computer Science student at UA, I've cultivated my skills in 
                many languages including Python, Java, Javascript, and C. Many projects I completed
                in my classes are included on my Github profile and explained under the 'Projects' section of
                this site.<br></br> <br></br>Through my education, I've learned to value clear, concise code accompanied with
                descriptive documentation. Collaborative projects, including the times I've been designated Project Lead
                and/or Srum Master, in the academic setting exposed me to the development process as well as the necessity
                for planning large scale designs. <br></br> <br></br> At Eller College, I've gained proficiency in professional 
                software such as Microsoft Applications. I have written both financial and progress reports evaluated by Eller College
                professors as well as practiced string communication within the work sphere. I believe integrating useful technological
                tools into the workplace is advantagious for improving business efficency.  
                </p>
                <img src="src\assets\UALogo.jpg" className="college-image" alt="college" style={bioImage} />
                </div> </section>

                <section id="research"> <Divider title="Research" align1='auto' align2='20px'></Divider>
                <div style={bioSection} className="fadeInSection responsive-section">
                <img src="src\assets\sarverImage.jpg" className="sarver-image" alt="sarver" style={bioImage} />
                <p style={bioText}> I have experience in working on collaborative research and data analysis from ongoing work at the Banner Medical
                Center under the University of Arizona. I work with several UA students on various experiments spanning Physiology to Artificial Intelligence.
                I have worked on several projects involving publication such as <a href='https://asaio.org/conference/program/2023/RENAL6.cgi'>Movement 
                Abnormality Quantitation: Comparison of On-Body vs. Around-Body Systems for Assessment of Movement Abnormalities in Chronic Kidney Disease</a>, 
                <a href='https://asaio.org/conference/program/2023/RENAL2.cgi'>Wired Room: Digital Sound, Image and Motion Analysis for Enhanced Medical Diagnostics 
                from A Patient Encounter</a>, and <a href='https://asaio.org/conference/program/2023/RENAL13.cgi'> Python Computational Methods Advance Video Motion 
                Capture for Telehealth and In-Person Diagnostic Accuracy</a> - along with several ongoing studies. All of the mentioned research papers involved
                a demonstration in understanding and conducting the steps of the Scientific Method, data analytics, and writing code scripts able to produce the target
                output. <br></br><br></br> Reviewing and editing publications has equipped me with the skill of formal reporting. This research has given me the amazing 
                oppurtunity to work in interdisciplinary settings with a great and knowledgeable group of people. I've been exposed to the crucialness of introducing 
                technical expertise in research settings for greater efficiency.
                </p>
                </div> </section>

                <section id="experience"> <Divider title="Experience" align1='20px' align2='0px'></Divider>
                <div style={bioSection} className="fadeInSection responsive-section">
                <p style={bioText}> Outside my research projects at Banner, I've worked as a project Desiner Intern for the UA Design Lab where
                my responsibility was to design the steps for completing long term projects that come in the form of a research endeavor ending in a
                paper or an end tangible product. I work with a team directing members through the steps of the software design plan, facilitate communication between 
                members and departments, and integrating computer science concepts and code into where the particular skills can benefit the project. <br></br><br></br>
                Project Management is a skill I have been developing on my own time and in work. I believe string communication and clear, soldified planning is the 
                key to a successful collabotation that will result in the optimal end goal.
                </p>
                <img src="src\assets\experienceImage.jpg" className="exper-image" alt="exper" style={bioImage} />
                </div> </section>

                <section id="personal"> <Divider title="Personal Learning" align1='auto' align2='20px'></Divider>
                <div style={bioSection} className="fadeInSection responsive-section">
                <p style={bioText}> While enhancing my experience and skills in the academic sphere, I also find it both gratifying and educational to 
                undertake my own projects not connected to a professional setting. For technical skills, I have several ongoing and completed projects 
                that I began because I believe using coding languages in practice is the best way to not only learn new languages but also reinforce the skills
                in other languages. I have undertaken projects in Python, Java, HTML/CSS, JavaScript, and React - all for fun and improvement. <br></br><br></br>
                Alongside my love of coding, I have other interests and hobbies that keep my life balanced and grounded. I shoot archery as a hobby with my family -  
                improving my aim every day - as well as hike around the trails around the archery range in Tucson's lovely desert terrain. I love to read and write 
                with a dream to publish some short stories someday on the subject of escapism in the modern day. I've even included some of my book recommendations
                under the 'Play' section in the homepage!<br></br><br></br> I've recently gotten into photography partially fueled by my love of travel. I feature a lot
                of my photos on this webpage and will continue to research it as an interest. 
                </p>
                </div> </section>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default BioPage;