import { useState } from "react";

const Guess = () => {
  const [word, setWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([]);
  const [letters, setLetters] = useState([]);

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
  };

  // console.log(word);

  document.addEventListener("keypress", (e) => {
    // setLetters(e.key);
    letters.push(e.key);
    console.log(letters);
  });

  return (
    <div className="text">
      <button className="generateButton" onClick={generateWord}>
        Generate Word
      </button>
      <h3 className="guess">{hiddenWord}</h3>
    </div>
  );
};

export default Guess;
