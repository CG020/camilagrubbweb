function NavBar( { message }) {
    return(
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">{message}</a>
      </div>
    </nav>
    )
}

export default NavBar;