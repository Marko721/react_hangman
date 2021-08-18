import { useState, useEffect } from "react";

const Guess = ({ word, hiddenWord, setHiddenWord }) => {
  // pogodjena slova koja su ukucana
  const [letters, setLetters] = useState([]);
  // pogresna slova koja su ukucana
  const [guseedLetters, setGuessedLetters] = useState([]);
  // spojena rec posle za proveru
  const joinedWord = word.join("");

  useEffect(() => {
    window.addEventListener("keydown", keyPressedHandler);
  }, [hiddenWord]); // svaki put kad se promeni hiddenWord updateuj

  // proverava da li je kliknuto slovo i prosledjuje slovo funkciji koja se uporedjuje
  const keyPressedHandler = (e) => {
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
          setHiddenWord((hiddenWord[i] = letter));

          console.log(word.length);
          console.log(hiddenWord);
          // wordString.innerHTML = hiddenWord.join("");
        }
      }
    }
  };

  return (
    <div className="text">
      <h3 className="guess">{hiddenWord}</h3>
    </div>
  );
};

export default Guess;
