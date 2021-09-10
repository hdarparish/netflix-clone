import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>NETFLIX</h1>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
      </ul>
    </nav>
  );
};

export default Nav;
