import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../hooks/useAuth";
import api from "../services/api";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [setError] = useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.data.ok) {
        setUser(null);
        navigate("/");
      }
    } catch (err) {
      if (!err?.response) {
        setError("No Server Response");
      } else if (err.response?.status === 400) {
        setError("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <nav className={isNavExpanded ? "expanded" : ""}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <Link to="/">About</Link>
          </li>
          <li
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <Link to="/">Contact</Link>
          </li>
          <li
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {user && <Link to="/profile">Profile</Link>}
          </li>
          <li
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {user === null ? (
              <Link to="/login" className="login-button">
                Login
                <FontAwesomeIcon
                  className="login-icon"
                  icon={faArrowRightToBracket}
                />
              </Link>
            ) : (
              <Link onClick={handleLogout} to="/" className="login-button">
                Logout
                <FontAwesomeIcon
                  className="login-icon"
                  icon={faArrowRightToBracket}
                />
              </Link>
            )}
          </li>
        </ul>
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="menu"
        >
          <FontAwesomeIcon className="bars-icon" icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
