import { useState, useEffect } from "react";

const Guess = ({ hiddenWord, word }) => {
  const [letters, setLetters] = useState([]);
  // const [letter, setLetter] = useEffect("");
  const joinedWord = word.join("");

  document.addEventListener("keypress", (e) => {
    if (e.key.match(/[a-z]/i)) {
      let letter = e.key.toUpperCase();
      // console.log(letter);
      // pozivanje funckije koja proverava
      checkAndReplace(letter, word);
    }
  });

  const checkAndReplace = (e) => {
    console.log(e);
  };

  return (
    <div className="text" onKeyDown={() => checkAndReplace()}>
      <h3 className="guess">{hiddenWord}</h3>
    </div>
  );
};

export default Guess;
