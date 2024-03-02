import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./Footer";
import NavBar from "./NavBar";

const InvolvePage = () => {
    const rectButton = {
        width: '90vw',
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
        textAlign: 'left',
    };

    const rectContent = {
        width: '85vw',
        height: 'auto',
        marginLeft: '35px',
        fontFamily: 'monospace, sans-serif',
    };

    return(
        <div>
            <NavBar message={'documenting my involvement'} tabs={['university', 'volunteer']}/>
            <p className="d-inline-flex gap-1">
                <a className="btn btn-primary" style={rectButton} data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Design Labs -- Working with APEX Applied Technologies --
                </a>
            </p>
            <div className="collapse" style={rectContent} id="collapse1">
                <div className="card card-body">
                    At the University of Arizona Design Labs, I got the oppurtunity to partner with several students
                    from multiple disciplines at the university. APEX Applied Technologues helps marginalized groups and 
                    small communities to improve quality of life environmentally and economically. We put together a 
                    team to work with APEX Applied Technologies on a toolkit for clients interested in the economic services.
                    This toolkit offers comprehensive guidance on the intricate processes involved in federal grant writing and 
                    management. This initiative sought to empower clients with the knowledge and tools necessary to secure funding 
                    that could significantly improve their communities' quality of life. Through this collaborative effort, we were 
                    able to contribute to APEX's mission of fostering sustainable development and economic growth.
                </div>
            </div>

            <p className="d-inline-flex gap-1">
                <a className="btn btn-primary" style={rectButton} data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Angel Heart Pajama Project Volunteering
                </a>
            </p>
            <div className="collapse" style={rectContent} id="collapse2">
                <div className="card card-body">
                    Angel Heart is a Southern Arizona Based volunteer group that helps children have access to a warm and welcoming 
                    community and 
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default InvolvePage;