import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <div className="logo">
        <h1>NETFLIX</h1>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 0 4vw;
  position: sticky;
  top: 0;
  min-height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #141414;
  color: white;
  .logo {
    color: rgb(229, 9, 20);
    font-family: "Bebas Neue", cursive;
    letter-spacing: 2px;
    font-weight: lighter;
    font-size: 1.5rem;

    cursor: pointer;
    h1 {
      font-weight: 100;
    }
  }
  .nav-links {
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-left: 3rem;
    li {
      font-size: 0.9rem;
    }
  }
`;

export default Nav;
