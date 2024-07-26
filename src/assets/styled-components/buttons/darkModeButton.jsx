import React from "react";
import styled from "styled-components";
import { GoMoon } from "react-icons/go";
import { useDarkMode } from "../../customHooks/darkMode.jsx";
import { darkTheme, lightTheme } from "../../themes/theme.js";

const StyledDarkModeButton = styled.div`
  cursor: pointer;
  font-size: 2rem;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: ${({ darkMode }) =>
      darkMode ? darkTheme.accent : lightTheme.accent};
  }

  .toggle-container {
    scale: 105%;
    width: 2.6rem;
    height: 1.3rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem;
    background-color: ${({ darkMode }) =>
      darkMode ? darkTheme.accent : "gray"};
    &:hover {
      background-color: ${({ darkMode }) =>
        darkMode ? darkTheme.accent : lightTheme.accent};
    }

    .toggle-circle {
      height: 0.9rem;
      width: 0.9rem;
      border-radius: 50%;
      background-color: white;
      cursor: pointer;
      transform: ${({ darkMode }) =>
        darkMode ? "translateX(1.3rem)" : "translateX(0)"};
      transition: transform 0.3s ease-in-out;
    }
  }

  .moon-icon {
    color: gray;
    &:hover {
      color: ${({ darkMode }) =>
        darkMode ? darkTheme.accent : lightTheme.accent};
    }
  }
`;

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledDarkModeButton onClick={toggleDarkMode} darkMode={darkMode}>
      <div className="toggle-container">
        <div className="toggle-circle"></div>
      </div>
      <GoMoon className="moon-icon" />
    </StyledDarkModeButton>
  );
}
