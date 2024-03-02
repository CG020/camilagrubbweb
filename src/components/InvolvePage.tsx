import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./Footer";
import NavBar from "./NavBar";

const InvolvePage = () => {
    const rectButton = {
        width: '85vw',
        height: 'auto',
        padding: '15px',
        margin: '30px',
        backgroundColor: '#333',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        boxSizing: 'border-box',
        fontFamily: 'monospace, sans-serif',
    };

    return(
        <div>
            <NavBar message={'documenting my involvement'} tabs={['university', 'volunteer']}/>
            <p className="d-inline-flex gap-1">
                <a className="btn btn-primary" style={rectButton} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default InvolvePage;