import styled from "styled-components";
import { lightTheme } from "../../themes/theme.js";

export const StyledWordPreview = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1rem;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  .word-and-sound {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .phonetic {
      color: ${({ theme }) => lightTheme.accent};
      font-weight: 400;
      font-size: 1.5rem;
    }

    .play-button {
      height: 80px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgba(174, 77, 200, 0.5);
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => lightTheme.accent};
        color: white;
      }

      i {
        font-size: 2rem;
        transform: translateY(2px);
        color: white;
      }
    }
  }

  h1 {
    font-size: 4rem;
    margin: 10px 0;
    transition: font-size 0.2s ease;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .chapter {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    margin: 2rem 0px;
    font-style: italic;

    hr {
      width: 100%;
      height: 1px;
      opacity: 50%;
    }
  }

  .chap {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    margin: 2rem 0px;
    font-style: italic;

    hr {
      width: 100%;
      height: 1px;
      opacity: 50%;
    }
  }

  .synonyms {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    max-width: 500px;
    flex-wrap: wrap;

    h3 {
      opacity: 50%;
      font-weight: 400;
    }
    p {
      color: ${({ theme }) => lightTheme.accent};
    }
  }
`;

export const StyledDefinitionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.6rem;

  i {
    font-size: 0.4rem;
    transform: translateY(2px);
    color: ${({ theme }) => lightTheme.accent};
  }

  .definition {
    display: flex;
    align-items: start;
    gap: 0.6rem;
  }

  .definition-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .examples {
    opacity: 50%;
    transform: translateX(15px);
  }

  a {
    color: ${({ theme }) => lightTheme.accent};
    &:hover {
      color: blue;
    }
  }
`;
