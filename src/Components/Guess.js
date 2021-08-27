import { useState, useEffect } from "react";

const Guess = ({ word }) => {
  // rec pretvorena u donje crte
  const [hiddenWord, setHiddenWord] = useState([]);
  // pogresna slova koja su ukucana
  const [guessedLetters, setGuessedLetters] = useState([]);
  // spojena rec posle za proveru
  const joinedWord = word.join("");

  useEffect(() => {
    displayHiddenWord();
    // displayHiddenWord();
    // window.addEventListener("keydown", handleKeyPress);
    // setHiddenWord(underscoreLetter); //Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
  }, [word]); // svaki put kad se promeni word updateuj

  // proverava da li je kliknuto slovo i prosledjuje slovo funkciji koja se uporedjuje
  const handleKeyPress = (e) => {
    console.log("cao");
    if (e.key.match(/[a-z]/i)) {
      const letter = e.key.toUpperCase();

      checkAndReplace(letter, word);
    }
  };

  const checkAndReplace = (letter, word) => {
    if (word.includes(letter)) {
      for (let i = 0; i <= word.length; i++) {
        if (word[i] == letter) {
          // hiddenWord[i] = letter;
          const [...underscoreLetter] = hiddenWord;
          underscoreLetter[i] = letter;
          setHiddenWord(underscoreLetter);
          // wordString.innerHTML = hiddenWord.join("");
        }
      }
    }
  };

  const displayHiddenWord = () => {
    const underscoreLetter = [];
    for (const char of word) {
      if (char === " ") {
        underscoreLetter.push(" ");
      } else {
        underscoreLetter.push("_");
      }
    }
    setHiddenWord(underscoreLetter);
  };

  return (
    <div className="text" onKeyDown={(e) => handleKeyPress(e)}>
      <h3 className="guess">{hiddenWord}</h3>
    </div>
  );
};

export default Guess;
