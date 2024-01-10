import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1><i>Hello, I'm<br></br><b>Camila Grubb</b></i></h1>
      <Link to="/contact">
        <button><i>contact me</i></button>
      </Link>
    </div>
  );
}

export default Header;
