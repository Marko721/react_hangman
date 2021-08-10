import { useState } from "react";
import Guess from "./Guess";

const Generate = () => {
  const [word, setWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([]);
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
        underscoreLetter.push(" ");
      } else {
        underscoreLetter.push("_");
      }
    }
    setHiddenWord(underscoreLetter);
  };

  return (
    <div>
      <button className="generateButton" onClick={generateWord}>
        Generate Word
      </button>
      <Guess word={word} hiddenWord={hiddenWord} />
    </div>
  );
};

export default Generate;
