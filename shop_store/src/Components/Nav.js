import React from "react";
import "../index.css";
import '../Assets/Navstyle.css';
import { Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Jules Groceries
      </a>
      <div className="navbar-links-container">
        <ul>
          <li>
            <Link
              to="#"
              className="site-navitem1 font-lg hover:font-xl hover:text-purple-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="site-navitem1 font-lg hover:font-xl hover:text-purple-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="site-navitem1 font-lg hover:font-xl hover:text-purple-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
