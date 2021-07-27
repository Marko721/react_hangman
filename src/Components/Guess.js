import { useEffect, useState } from "react";

const Guess = () => {
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
    const randomWord = Math.floor(Math.random() * words.length);

    const guessWord = words[randomWord];
    const [...charWordArray] = guessWord;
    let underscoreLetter = [];

    for (const letter of charWordArray) {
      if (letter === " ") {
        underscoreLetter += "  ";
      } else {
        underscoreLetter += "_";
      }
    }
    setWord(underscoreLetter);
  };

  // console.log(typeof word);
  // console.log(word);
  // const underWord = word.map((letter) => {
  //   letter.replaceAll(/./g, "_");
  // });
  // setWord(charWordArray);
  // return word.replaceAll(/./g, "_");

  // napraviti dugme Generate koje daje random rec iz words niza

  return (
    <div className="text">
      <button className="generateButton" onClick={generateWord}>
        Generate Word
      </button>
      <h3 className="guess">{word}</h3>
    </div>
  );
};

export default Guess;
