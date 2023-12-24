import Divider from "./Divider";
import NavBar from "./NavBar";

const BioPage = () => {

    const bioSection: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    }

    const headerText: React.CSSProperties = {
        marginLeft: '5px',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'playfair display',
        color: '#a2a2a2a0',
        fontSize: '60px',
    };

    const bioImage: React.CSSProperties = {
        width: '450px',
        height: 'auto',
        marginLeft: '20px',
        padding: '30px',
        borderRadius: '30px',
    };

    const bioText: React.CSSProperties = {
        fontFamily: 'monospace',
        marginRight: '20px',
        textAlign: 'center',
        fontSize: '1.2em',
        marginTop: '55px',
    }

    return(
        <div>
            <NavBar message={'My journey so far . . .'}/>
            <h1 style={headerText}><i><b>Hi! My name is<br></br> Camila Grubb</b></i></h1>
            <div style={bioSection}>
                <img src="src\assets\bioProfile.jpg" className="profile-image" alt="BioProfile" style={bioImage} />
                <p style={bioText}>I am a current alumni at the University of Arizona completing my B.S. in Computer Science, my
                    minor in Business Administration at Eller College, and my certification in Cybersecurity at UA South.<br></br>
                    <br></br> Over the past 4 years I have cultivated my coding and problem solving skills be it within the classroom,
                    in the workplace, or on my own spare time.
                </p>
            </div>
            <div>
                <Divider title="Academics" align1='20px' align2='0px'></Divider>
                <div style={bioSection}>
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
                </div>

                <Divider title="Research" align1='auto' align2='20px'></Divider>
                <div style={bioSection}>
                <img src="src\assets\sarverImage.jpg" className="sarver-image" alt="sarver" style={bioImage} />
                <p style={bioText}> placement text
                </p>
                </div>

                <Divider title="Experience" align1='20px' align2='0px'></Divider>
                <div style={bioSection}>
                <p style={bioText}> placement text
                </p>
                </div>

                <Divider title="Personal Learning" align1='auto' align2='20px'></Divider>
                <div style={bioSection}>
                <p style={bioText}> placement text
                </p>
                </div>
            </div>
          </div>
    );
}

export default BioPage;