import { useState } from "react";
import Guess from "./Guess";
import Cicaglisa from "./Cicaglisa";

const Generate = () => {
  const [word, setWord] = useState([]);

  // word to guess
  const words = [
    "Tuning",
    // "Motivational quotes",
    // "Working hard",
    // "The Lord of the rings",
    // "Healthy habits",
  ];

  const generateWord = () => {
    const randomNumber = Math.floor(Math.random() * words.length);

    const guessWord = words[randomNumber];
    const [...charWordArray] = guessWord.toUpperCase();
    setWord(charWordArray);
  };

  return (
    <div>
      <div className="button">
        <button className="generateButton" onClick={generateWord}>
          Generate Word
        </button>
      </div>
      {word.length > 1 && <Cicaglisa />}
      <Guess word={word} />
    </div>
  );
};

export default Generate;
