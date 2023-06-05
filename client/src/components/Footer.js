import React from "react";

import logo from "../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-footer">
          <img src={logo} alt="footer-logo" />
        </div>
        <div className="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facilis maiores ipsam veritatis laudantium maxime vel incidunt
            magni, nihil necessitatibus veniam natus eum at quidem laborum,
            consequatur quo beatae obcaecati?
          </p>
        </div>
        <div className="footer-links">
          <h2>Socials</h2>
          <div className="links">
            <ul>
              <li>
                <FontAwesomeIcon
                  className="social-icon"
                  icon={["fab", "linkedin"]}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="social-icon"
                  icon={["fab", "facebook"]}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="social-icon"
                  icon={["fab", "twitter"]}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="social-icon"
                  icon={["fab", "instagram"]}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="notices">
        Copyright © 2023 · Developed and designed by Vadym
      </div>
    </footer>
  );
};

export default Footer;
