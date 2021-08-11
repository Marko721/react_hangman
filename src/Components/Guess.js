import { useState } from "react";

const Guess = ({ hiddenWord, word }) => {
  const [letters, setLetters] = useState([]);
  const joinedWord = word.join("");

  document.addEventListener("keypress", (e) => {
    if (e.key.match(/[a-z]/i)) {
      let letter = e.key.toUpperCase();
      console.log(letter);
      // pozivanje funckije koja proverava
      checkAndReplace(letter, word);
    }
  });

  const checkAndReplace = (letter, word) => {};

  return (
    <div className="text">
      <h3 className="guess">{hiddenWord}</h3>
    </div>
  );
};

export default Guess;
