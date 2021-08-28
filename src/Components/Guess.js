import { useState, useEffect } from "react";

const Guess = ({ word }) => {
  // word converted to underscores
  const [hiddenWord, setHiddenWord] = useState([]);
  // wrong letters typed
  // const [guessedLetters, setGuessedLetters] = useState([]);
  // joined word for win / los check
  // const joinedWord = word.join("");

  useEffect(() => {
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

    displayHiddenWord();
    // displayHiddenWord();
    // window.addEventListener("keydown", handleKeyPress);
    // setHiddenWord(underscoreLetter); //Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
  }, [word]); // svaki put kad se promeni word updateuj

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.match(/[a-z]/i)) {
        const letter = e.key.toUpperCase();

        checkAndReplace(letter);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    const checkAndReplace = (letter) => {
      if (word.includes(letter)) {
        for (let i = 0; i <= word.length; i++) {
          if (word[i] === letter) {
            // hiddenWord[i] = letter;
            const [...underscoreLetter] = hiddenWord;
            underscoreLetter[i] = letter;
            setHiddenWord(underscoreLetter);
            console.log(hiddenWord);
            // wordString.innerHTML = hiddenWord.join("");
          }
        }
      } else {
        console.log("Ne include brt");
      }
    };
  }, []);

  return (
    <div className="text">
      <h3 className="guess">{hiddenWord}</h3>
    </div>
  );
};

export default Guess;
