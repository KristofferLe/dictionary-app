import React, { useState } from "react";
import styled from "styled-components";
import { useDarkMode } from "../../customHooks/darkMode.jsx";
import { lightTheme, darkTheme } from "../../themes/theme.js";
import DarkModeButton from "../buttons/darkModeButton.jsx";
import { PiBookThin } from "react-icons/pi";
import { useFont } from "../../customHooks/activeFont.jsx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const StyledHeader = styled.header`
  width: 100%;
  max-width: 600px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: end;
  justify-content: space-between;

  .book {
    font-size: 3rem;
    color: gray;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => lightTheme.accent};
    }
  }

  .font-and-darkmode-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  hr {
    width: 3.5rem;
    border: 1px solid gray;
    opacity: 30%;
    transform: rotate(90deg);
  }

  .active-font {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    cursor: pointer;
    position: relative;
    width: 125px;
    font-weight: 500;

    i {
      color: ${({ darkMode }) => darkTheme.accent};
      font-size: 2rem;
      transform: translateY(3px);
    }
  }

  .font-options-container {
    position: absolute;
    top: 2.6rem;
    font-weight: 500;
    width: 120px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 1rem;
    z-index: 999;
    background-color: ${({ darkMode }) =>
      darkMode ? darkTheme.background : lightTheme.background};
    box-shadow: 4px 8px 18px 8px
      ${({ darkMode }) => (darkMode ? darkTheme.accent : "black")};

    border-radius: 6px;

    p {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Header() {
  const { activeFont, setActiveFont } = useFont();
  const { darkMode } = useDarkMode();
  const theme = darkMode ? darkTheme : lightTheme;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <StyledHeader darkMode={darkMode}>
      <PiBookThin className="book" aria-label="Book Icon" />
      <div
        className="font-and-darkmode-container"
        onClick={() => setIsHovering(false)}
      >
        <p
          className="active-font"
          aria-label="Active font for the application"
          onMouseEnter={() => setIsHovering(true)}
          onClick={() => setIsHovering(true)}
        >
          {activeFont}
          <i>
            <MdOutlineKeyboardArrowDown aria-label="Icon of an arrow pointing down" />
          </i>
          {isHovering && (
            <ul
              className="font-options-container"
              aria-label="List of all the fonts available for the application"
              onMouseLeave={() => setIsHovering(false)}
            >
              <p onClick={() => setActiveFont("Mono")} aria-label="Mono font">
                Mono
              </p>
              <p onClick={() => setActiveFont("Sans")} aria-label="Sans font">
                Sans
              </p>
              <p onClick={() => setActiveFont("Serif")} aria-label="Serif font">
                Serif
              </p>
              <p
                onClick={() => setActiveFont("Poppins")}
                aria-label="Poppins font"
              >
                Poppins
              </p>
              <p onClick={() => setActiveFont("Tiny5")} aria-label="Tiny font">
                Tiny
              </p>
              <p
                onClick={() => setActiveFont("Raleway")}
                aria-label="Raleway font"
              >
                Raleway
              </p>
              <p
                onClick={() => setActiveFont("Margarine")}
                aria-label="Margarine font"
              >
                Margarine
              </p>
            </ul>
          )}
        </p>
        <hr />
        <DarkModeButton />
      </div>
    </StyledHeader>
  );
}
