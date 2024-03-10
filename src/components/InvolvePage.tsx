import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./Footer";
import NavBar from "./NavBar";

const InvolvePage = () => {
    const rectButton = {
        width: '70vw',
        height: '100px',
        padding: '15px',
        margin: '30px',
        marginBottom: '5px',
        backgroundColor: '#333',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        boxSizing: 'border-box',
        fontFamily: 'monospace, sans-serif',
        fontSize: 'calc(0.5em + 1vw)',
        textAlign: 'left',
        paddingLeft: '20px',
    };

    const rectContent = {
        width: '70vw',
        maxWidth: '68vw',
        height: 'auto',
        marginLeft: '35px',
        fontFamily: 'monospace, sans-serif',
        fontSize: 'calc(0.5em + 0.6vw)',
    };

    const involveSections = [
        {id:'apex', title: 'Design Labs -- Working with APEX Applied Technologies --',
        content: `At the University of Arizona Design Labs, I got the oppurtunity to partner with several students
        from multiple disciplines at the university. APEX Applied Technologues helps marginalized groups and 
        small communities to improve quality of life environmentally and economically. We put together a 
        team to work with APEX Applied Technologies on a toolkit for clients interested in the economic services.
        This toolkit offers comprehensive guidance on the intricate processes involved in federal grant writing and 
        management. This initiative sought to empower clients with the knowledge and tools necessary to secure funding 
        that could significantly improve their communities' quality of life. Through this collaborative effort, we were 
        able to contribute to APEX's mission of fostering sustainable development and economic growth.`,
        link: ''},
        {id:'angel', title:'Angel Heart Pajama Project Volunteering',
        content: `Angel Heart is a Southern Arizona Based volunteer group that helps children have access to a warm and welcoming 
        community. Children get access to clothes, books, toys, and dependable volunteers there to help them grow and thrive away
        from the difficult living situations they come from. I have been lucky enough to volunteer for Pajama Project events including
        those that take place around the holidays where I get a chance to meet many kindhearted kids looking for a safe place to learn.
        I've met lots of good people and it is a great honor to work among my fellow Tucsonans to better the community.`,
        link: <a href="https://angelheartpajamaproject.org/"> Check out Angel Heart's Mission here.</a>}
    ]

    return(
        <div>
            <NavBar message={'documenting my involvement'} tabs={['']}/>
            {involveSections.map(({ id, title, content, link}) => (
            <section key={id}>
            <p className="d-inline-flex gap-1">
                <a className="btn btn-primary" style={rectButton} data-bs-toggle="collapse" href={`#${id}`} role="button" aria-expanded="false" aria-controls={id}>
                    {title}
                </a>
            </p>
            <div className="collapse" style={rectContent} id={id}>
                <div className="card card-body">
                    {content} <br></br> <br></br>
                    {link}
                </div>
            </div>
            </section>
            ))}
            <Footer></Footer>
        </div>
    );
}

export default InvolvePage;