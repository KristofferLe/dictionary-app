import React, { useState, useContext, createContext } from "react";

export const ActiveFontContext = createContext();

export default function ActiveFontProvider({ children }) {
  const [activeFont, setActiveFont] = useState("Raleway");

  return (
    <ActiveFontContext.Provider value={{ activeFont, setActiveFont }}>
      {children}
    </ActiveFontContext.Provider>
  );
}

export function useFont() {
  const { activeFont, setActiveFont } = useContext(ActiveFontContext);
  return { activeFont, setActiveFont };
}
