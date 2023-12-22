
import NavBar from "./NavBar";
import Panel from "./Panel";

const ContactPage = () => {
    const contactStyle: React.CSSProperties = {
        fontFamily: 'monospace.',
        margin: '30px',
    };

    return (
    <div>
        <NavBar message={'Contact Information'}/>
        <p style={contactStyle}>Contact me with any of the options below or browse my professional profiles!</p>
        <div className='container'>
            <Panel 
                title="Email" 
                image="src\assets\paperBanner.jpg" 
                content="camilagrubb@gmail.com" 
            />
            <Panel 
                title="Phone" 
                image="src\assets\paperBanner.jpg" 
                content="520.360.9985" 
            />
            <Panel 
                title="Linkedin" 
                image="src\assets\paperBanner.jpg" 
                content={<a href="https://www.linkedin.com/in/camila-grubb-8ab00b240/"> Linkedin Profile Here</a>}
            />
            <Panel 
                title="Github" 
                image="src\assets\paperBanner.jpg" 
                content={<a href="https://github.com/CG020"> Github Profile Here</a>}
            />
        </div>
    </div>
    );
};

export default ContactPage;

