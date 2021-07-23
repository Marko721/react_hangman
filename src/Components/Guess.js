import { useState } from "react";

const Guess = () => {
  const [word, setWord] = useState([""]);

  // niz reci koje treba pogoditi
  const words = [
    "Tuning",
    "Motivational quotes",
    "Working hard",
    "The Lord of the rings",
  ];

  const randomWord = Math.floor(Math.random() * words.length);

  const guessWord = words[randomWord];
  const [...charWordArray] = guessWord;
  console.log(charWordArray);
  setWord(charWordArray);
  // return word.replaceAll(/./g, "_");

  // napraviti dugme Generate koje daje random rec iz words niza

  return (
    <div className="text">
      <h3 className="guess"> sample word</h3>
    </div>
  );
};

export default Guess;
