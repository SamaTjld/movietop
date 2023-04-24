import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <div className="logo_cont">
      <div className="logo">
        <h2 className="logo1">
          Movie<span className="logo2">Top</span>
        </h2>
      </div>
      <ul className="nav_link">
        <li className="active">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {" "}
            Home
          </NavLink>
        </li>
        <li className="active">
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Search
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
