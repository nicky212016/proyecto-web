import React from "react";
import { useAuth } from "../context/AuthContext";

import "./Header.css";

import { Link } from "react-router-dom";

const Header = ({ titulo }) => {
  const { logout } = useAuth();
  return (
    <div className="ur-header">
      <div>
        <Link to="/aulas" className="ur-header-link">
          <img
            className="ur-header-logo"
            src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png"
            alt="logo"
          />
        </Link>
      </div>

      <h1 className="ur-header-title">{titulo}</h1>
      <button className="ur-header-button" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default Header;
