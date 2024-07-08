import React from "react";
import "../index.css";
import "../Assets/Navstyle.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

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
          {/* <li className="icon-main">
            <FontAwesomeIcon icon={faHeart} className="icon" />
          </li> */}
          <li className="icon-main">
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <linearGradient
                  id="icon-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ea0087" />
                  <stop offset="100%" stopColor="#270096" />
                </linearGradient>
              </defs>
            </svg>
            <FontAwesomeIcon icon={faHeart} className="icon" />
          </li>
          <li className="icon-main">
          <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <linearGradient
                  id="icon-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ea0087" />
                  <stop offset="100%" stopColor="#270096" />
                </linearGradient>
              </defs>
            </svg>
            <FontAwesomeIcon icon={faShoppingBasket}  className="icon"/>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
