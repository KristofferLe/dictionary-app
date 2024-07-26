import React from "react";
import { lightTheme, darkTheme } from "../../themes/theme.js";
import { IoIosPlay } from "react-icons/io";
import { useDarkMode } from "../../customHooks/darkMode.jsx";
import { FaCircle } from "react-icons/fa";
import {
  StyledWordPreview,
  StyledDefinitionsContainer,
} from "./resultsStyling.jsx";

export default function WordPreview({ data }) {
  const { darkMode } = useDarkMode();
  if (!data || data.length === 0) return <h1>No Data available</h1>;

  const theme = darkMode ? darkTheme : lightTheme;

  const meanings = data[0].meanings || [];
  const definitions = meanings.length > 0 ? meanings[0].definitions : [];
  const synonums = meanings.length > 0 ? meanings[0].synonyms : [];

  const meaningVerb = meanings.length > 1 ? meanings[1].definitions : [];
  const synonumsVerb = meanings.length > 1 ? meanings[1].synonyms : [];

  const phonetics = data[0].phonetics || [];
  let audioSrc = "";

  phonetics.forEach((phonetic) => {
    if (phonetic.audio) {
      audioSrc = phonetic.audio;
      return;
    }
  });

  const audio = new Audio(audioSrc);

  const playAudio = () => {
    if (audioSrc) {
      audio.play();
    } else {
      console.error("Audio not found");
    }
  };

  return (
    <StyledWordPreview lightTheme={lightTheme} darkMode={darkMode}>
      <section className="word-and-sound">
        <div>
          <h1> {data[0].word} </h1>
          <h2 className="phonetic"> {data[0].phonetic} </h2>
        </div>
        <div className="play-button" onClick={playAudio}>
          <i>
            <IoIosPlay />
          </i>
        </div>
      </section>
      <div className="chapter">
        <p>noun</p>
        <hr />
      </div>
      <StyledDefinitionsContainer className="definitions-container">
        <small>Meaning</small>
        {definitions.map((definition, index) => (
          <div className="definition-container" key={index}>
            <p className="definition">
              <i>
                <FaCircle />
              </i>
              {definition.definition}
            </p>
            <p className="examples">{definition.example}</p>
          </div>
        ))}
        <div className="synonyms">
          <h3>Synonyms</h3>
          {synonums.map((synonym, index) => (
            <p key={index}>{synonym}</p>
          ))}
        </div>
        <div className="chap">
          <p>verb</p>
          <hr />
        </div>
        <small>Meaning</small>
        {meaningVerb.map((definition, index) => (
          <div className="definition-container" key={index}>
            <p className="definition">
              <i>
                <FaCircle />
              </i>
              {definition.definition}
            </p>
            <p className="examples">{definition.example}</p>
          </div>
        ))}
        <div className="synonyms">
          <h3>Synonyms</h3>
          {synonumsVerb.map((synonym, index) => (
            <p key={index}>{synonym}</p>
          ))}
        </div>
        <div>
          <p>Source</p>
          <a href=""> {data[0].sourceUrls[0]} </a>
        </div>
      </StyledDefinitionsContainer>
    </StyledWordPreview>
  );
}
