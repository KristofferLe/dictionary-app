import React from "react";
import "./App.css";
import Header from "./assets/styled-components/header/header";
import styled from "styled-components";
import ApplicationWrapper from "./assets/styled-components/wrappers/applicationContainer";
import SearchBar from "./assets/styled-components/search/searchComponent";
import WordPreview from "./assets/styled-components/results/results";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
`;

function App() {
  return (
    <StyledMain>
      <Header />
      <ApplicationWrapper>
        <SearchBar />
      </ApplicationWrapper>
    </StyledMain>
  );
}

export default App;
