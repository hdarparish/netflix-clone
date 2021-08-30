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
  min-height: 6.5vh;
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

    h1 {
      font-weight: 100;
      cursor: pointer;
    }
  }
  .nav-links {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-left: 3rem;
    li {
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;

export default Nav;
