import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <h1>Kidvora</h1>
      </div>
      <div>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </div>
  );
}
