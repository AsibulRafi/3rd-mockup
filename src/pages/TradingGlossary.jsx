import React, { useState } from "react";
import Banner from "../Components/Banner";
import hero from "../assets/glossaryHero.png";
import Index from "../Components/Trading";
const TradingGlossary = () => {
  const [selectedLetter, setSelectedLetter] = useState("a");

  const alpabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const LettersBlock = () => {
    return alpabet.map((letter) => {
      return (
        <div
          key={letter}
          className={letter === selectedLetter ? "tg__active" : "tg_text"}
          onClick={() => setSelectedLetter(letter)}
        >
          {letter.toUpperCase()}
        </div>
      );
    });
  };
  return (
    <>
      <Banner img={hero} text="Trading Glossary" />
      <section className="trading__letter">
        <LettersBlock />
      </section>
      <section className="trading">
        <Index letter={selectedLetter} />
      </section>
    </>
  );
};

export default TradingGlossary;
