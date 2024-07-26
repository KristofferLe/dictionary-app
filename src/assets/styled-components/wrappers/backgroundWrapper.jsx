import React from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../../themes/theme.js";
import { useDarkMode } from "../../customHooks/darkMode.jsx";
import { useFont } from "../../customHooks/activeFont.jsx";
import { useMediaQuery } from "react-responsive";

const StyledAppWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: ${({ activeFont }) => activeFont};
  font-size: 1rem;

  transition: all 0.5s ease;
`;

export default function AppWrapper({ children }) {
  const { activeFont } = useFont();
  const { darkMode } = useDarkMode();
  const theme = darkMode ? darkTheme : lightTheme;
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <StyledAppWrapper theme={theme} activeFont={activeFont} isMobile={isMobile}>
      {children}
    </StyledAppWrapper>
  );
}
