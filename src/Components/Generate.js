import { useState } from "react";

const Generate = () => {
  const [word, setWord] = useState([]);
  // niz reci koje treba pogoditi
  const words = [
    "Tuning",
    "Motivational quotes",
    "Working hard",
    "The Lord of the rings",
    "Healthy habits",
  ];

  const generateWord = () => {
    const randomNumber = Math.floor(Math.random() * words.length);

    const guessWord = words[randomNumber];
    const [...charWordArray] = guessWord;
    setWord(charWordArray);

    let underscoreLetter = [];

    for (const char of charWordArray) {
      if (char === " ") {
        underscoreLetter += "  ";
      } else {
        underscoreLetter += "_";
      }
    }
    setHiddenWord(underscoreLetter);

    return (
      <div>
        <button className="generateButton" onClick={generateWord}>
          Generate Word
        </button>
      </div>
    );
  };
};

export default Generate;
