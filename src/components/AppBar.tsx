import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  background: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  margin-top: 0rem;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px); /* Frosted-glass effect */

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    position: relative;
    display: inline-block;
    overflow: hidden; /* Hide the passing line outside the text */

    /* Adjusting the line's width and position */
    &:hover::after {
      content: '';
      position: absolute;
      bottom: 0; /* Position the line at the bottom of the text */
      left: 0;
      width: 100%; /* Match the width of the text */
      height: 2px; /* Thin line passing under */
      background: linear-gradient(
        120deg,
        transparent 0%,
        rgba(255, 255, 255, 0.6) 50%,
        transparent 100%
      );
      transform: scaleX(0); /* Initially set the line scale to 0 */
      animation: shine-cross 0.6s ease-out forwards;
    }
  }

  @keyframes shine-cross {
    0% {
      transform: scaleX(0); /* Start with no line */
    }
    100% {
      transform: scaleX(1); /* Expand the line to its full width */
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    padding: 0rem;
    font-size: 0.9rem; /* Adjust font size for mobile screens */
    flex-direction: row;
    align-items: flex-start;
    margin-top: -1rem;

    a {
      margin-bottom: 2rem;
      margin-top: 2rem;
      font-size: 1rem; /* Adjust font size for mobile links */
    }
  }
`;

const AppBar: React.FC = () => {
  return (
    <NavBar>
      <Link to="/about">Ａｂｏｕｔ</Link>
      <Link to="/projects">Ｐｒｏｊｅｃｔｓ</Link>
      <Link to="/education">Ｅｄｕ & Ｓｋｉｌｌｓ</Link>
      
    </NavBar>
  );
};

export default AppBar;
