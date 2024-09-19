import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary">
      <div className="container-fluid d-flex align-items-center"> 
        <a className="navbar-brand" href="#">My Portfolio</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link active" href="#Portfolio">Portfolio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar