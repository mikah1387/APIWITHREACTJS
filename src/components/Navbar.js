import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Logo />
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}
