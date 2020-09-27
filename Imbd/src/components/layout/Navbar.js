import React from 'react';
import { Link } from 'react-router-dom';

//creating a functional navbar component
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
            <i className="fas fa-film fa-2x" id="movie-logo"></i>MovieInfo
            </Link>
            <Link className = "SignIn-button" to = "/SignIn">SignIn</Link>
            <Link className = "SignUp-button" to = "/SignUp">SignUp</Link>
          </div>
      </nav>
    </div>
  );
}
//exporting
export default Navbar;