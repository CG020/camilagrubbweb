function NavBar( { message, tabs }) {
    return(
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">{message}</a>
        <ul className="nav nav-underline">
                {tabs.map((tab, index) => (
                    <li className="nav-item" key={index}>
                    <a className="nav-link active" aria-current="page" href={'#${tab}'}>{tab}</a>
                    </li> 
                ))}
          </ul>
      </div>
    </nav>
    )
}

export default NavBar;