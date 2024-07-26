import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useDarkMode } from "../../customHooks/darkMode.jsx";
import { lightTheme, darkTheme } from "../../themes/theme.js";
import { useFont } from "../../customHooks/activeFont.jsx";
import useFetch from "../../customHooks/useFetch.jsx";
import WordPreview from "../results/results.jsx";

const StyledSearchBarContainer = styled.section`
  width: 100%;
  background-color: ${({ darkMode }) =>
    darkMode ? darkTheme.secondary : lightTheme.secondary};
  border-radius: 12px;
  position: relative;
  transition: background-color 0.3s ease;

  input {
    width: 100%;
    padding: 18px 10px;
    border-radius: 10px;
    border: none;
    background: transparent;
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    font-size: 1.2rem;
    font-weight: 700;
    font-family: ${({ activeFont }) => activeFont};
    transition: color 0.3s ease;

    &:focus {
      outline: solid 3px
        ${({ darkMode }) => (darkMode ? "white" : lightTheme.accent)};
    }
  }

  input::placeholder {
    padding-left: 2px;
  }

  .search-icon {
    position: absolute;
    right: 4px;
    top: 4px;
    font-size: 1.7rem;
    opacity: 80%;
    font-weight: 600;
    color: ${({ darkMode }) =>
      darkMode ? darkTheme.accent : lightTheme.accent};
    cursor: pointer;
    border-radius: 12px;
    height: 50px;
    width: 50px;
    display: grid;
    place-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const StyledError = styled.h1`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
`;

const StyledLoading = styled.h1`
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("keyboard");
  const handleInputChange = ({ target }) => setInputValue(target.value);
  const { darkMode } = useDarkMode();
  const { activeFont } = useFont();
  const { data, isLoading, error, fetchData } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue.toLowerCase()}`
  );

  const handleSearch = () => {
    if (inputValue.length === 0) return;
    setSearchValue(inputValue);
    fetchData();
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (isLoading)
    return <StyledLoading className="loading">Loading...</StyledLoading>;
  if (error)
    return (
      <StyledError className="error">
        <StyledSearchBarContainer darkMode={darkMode} activeFont={activeFont}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search for any word..."
          />
          <i className="search-icon" onClick={handleSearch}>
            <IoSearch />
          </i>
        </StyledSearchBarContainer>
        Sorry, this word is not in here. Please try another word.
      </StyledError>
    );

  return (
    <>
      <StyledSearchBarContainer darkMode={darkMode} activeFont={activeFont}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for any word..."
        />
        <i className="search-icon" onClick={handleSearch}>
          <IoSearch />
        </i>
      </StyledSearchBarContainer>

      <WordPreview data={data} />
    </>
  );
}
