
import NavBar from "./NavBar";
import Panel from "./Panel";

const ContactPage = () => {
    const contactStyle: React.CSSProperties = {
        fontFamily: 'monospace.',
        margin: '30px',
    };

    return (
    <div>
        <NavBar message={'contact information'} tabs={['']}/>
        <p style={contactStyle}>contact me with any of the options below or browse my professional profiles</p>
        <div className='container'>
            <Panel 
                title="email" 
                image="src\assets\windowImage.jpg" 
                content="camilagrubb@gmail.com" 
                onClick={null}
            />
            <Panel 
                title="phone" 
                image="src\assets\windowImage.jpg" 
                content="520.360.9985" 
                onClick={null}
            />
            <Panel 
                title="Linkedin" 
                image="src\assets\windowImage.jpg" 
                content={<a href="https://www.linkedin.com/in/camila-grubb-8ab00b240/"> Linkedin Profile Here</a>}
                onClick={null}
            />
            <Panel 
                title="Github" 
                image="src\assets\windowImage.jpg" 
                content={<a href="https://github.com/CG020"> Github Profile Here</a>}
                onClick={null}
            />
        </div>
    </div>
    );
};

export default ContactPage;

