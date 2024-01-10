function NavBar( { message }) {
    return(
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">{message}</a>
        <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">play</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contact</a>
            </li>
          </ul>
      </div>
    </nav>
    )
}

export default NavBar;