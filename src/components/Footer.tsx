import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ContactPage from './ContactPage';

function Footer({ song="Pretty Boy by Joji ft. Lil Yachty",
 book= "Mythology by Edith Hamilton", doing="coding" }) {

    const footerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '40px',
        borderTop: '1px solid #ddd',
        backgroundColor: '#f3f3f3',
        gap: '100px',
        paddingLeft: '150px',
        flexWrap: 'wrap',
    };

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        maxWidth: '400px',
        justifyContent: 'center'
    };

    const titleStyle = {
        marginBottom: '10px',
        font: 'monospace',
        fontSize: '25px',
    };

    const contentStyle = {
        paddingLeft: '10px',
        textAlign: 'left',
        font: 'monospace',
        whiteSpace: 'pre-wrap',
    };

    const spacingStyle = {
        marginTop: '10px',
        display: 'block',
    };

    return (
        <div> <br></br><br></br><br></br><br></br><br></br><br></br>
        <footer style={footerStyle}>
            <div style={columnStyle}>
            <p style={titleStyle}>play music</p>
            <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/track/0f1G5SHFoFC9lO03gHCGVS?utm_source=generator" 
                width="100%" 
                height="352" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
            </div>
            <div style={columnStyle}>
                <p style={titleStyle}>contact</p>
                <p style={contentStyle}><strong>email:</strong> <span style={spacingStyle}><pre>   camilagrubb@gmail.com</pre></span></p>
                <p style={contentStyle}><strong>phone:</strong> <span style={spacingStyle}><pre>   520-360-9995</pre></span></p>
                <p style={contentStyle}><strong>other methods:</strong> <span style={spacingStyle}><pre>   <Link to="/contact">click here</Link></pre></span> </p>
            </div>
            <div style={columnStyle}>
                <p style={titleStyle}>status</p>
                <p style={contentStyle}><strong>listening to:</strong> <span style={spacingStyle}><pre>    <i>{song || '...'}</i></pre></span></p>
                <p style={contentStyle}><strong>reading:</strong> <span style={spacingStyle}><pre>   <i>{book || '...'}</i></pre></span></p>
                <p style={contentStyle}><strong>doing:</strong> <span style={spacingStyle}><pre>   <i>{doing || '...'}</i></pre></span></p>
            </div>
        </footer> </div>
    );
}

export default Footer;
