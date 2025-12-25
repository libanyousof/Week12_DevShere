import React from "react";
// TODO: Import LINK from react router dom components
import { Link } from "react-router";
import { useLocation } from "react-router-dom";

import { Github } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Github size={24} />
          <span>DevSphere</span>
        </Link>

        <ul className="navbar-menu">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/projects" className="navbar-item">
            Projects
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
