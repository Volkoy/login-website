import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [error, setError] = useState("");

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
      console.log(response);
      if (response.data.ok) {
        setUser(null);
        navigate("/");
      }
    } catch (err) {
      if (!err?.response) {
        setError("No Server Response");
      } else {
        setError("Logout Failed");
      }
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="user-info">
        <FontAwesomeIcon icon={faUser} size="2x" />
        <p>User logged in as:</p>
        <p className="user-email">{user}</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Profile;
