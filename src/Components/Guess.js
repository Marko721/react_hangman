import { useState } from "react";

const Guess = () => {
  const [word, setWord] = useState("");

  // niz reci koje treba pogoditi
  const words = [
    "Tuning",
    "Motivational quotes",
    "Working hard",
    "The Lord of the rings",
  ];

  const generateWord = () => {
    const randomWord = Math.floor(Math.random() * words.length);

    const guessWord = words[randomWord];
    const [...charWordArray] = guessWord;
    // console.log(charWordArra);
    setWord(charWordArray);
  };

  console.log(word);

  const testArr = ["a", "b", "c", "d"];

  // setWord(charWordArray);
  // return word.replaceAll(/./g, "_");

  // napraviti dugme Generate koje daje random rec iz words niza

  return (
    <div className="text">
      <button className="generateButton" onClick={generateWord}>
        Generate Word
      </button>
      <h3 className="guess">{word}</h3>
      <p>{testArr}</p>
    </div>
  );
};

export default Guess;
