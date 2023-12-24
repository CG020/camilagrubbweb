import Divider from "./Divider";
import NavBar from "./NavBar";

const BioPage = () => {

    const bioImage: React.CSSProperties = {
        marginLeft: '5px',
        padding: '30px',
    };

    const bioText: React.CSSProperties = {
        fontFamily: 'monospace',
    }

    return(
        <div>
            <NavBar message={'My journey so far . . .'}/>
            {/* <img src="src\assets\bioProfile.jpg" className="profile-image" alt="BioProfile" style={bioImage} /> */}
            <div>
                <p>Hi! My name is Camila Grubb</p>
                <Divider title="About Me" align1='20px' align2='0px'></Divider>
                <Divider title="Academics" align1='20px' align2='0px'></Divider>
                <p>I am a current alumni at the University of Arizona completing my B.S. in Computer Science, my
                    minor in Business Administration at Eller College, and my certification in Cybersecurity at UA South.
                    Over the past 4 years I have cultivated my coding and problem solving skills be it within the classroom,
                    in the workplace, or on my own spare time.
                </p>
              </div>
          </div>
    );
}

export default BioPage;