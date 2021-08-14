import { useState, useEffect } from "react";

const Guess = ({ hiddenWord, word }) => {
  const [letters, setLetters] = useState([]);
  // const [keyPressed, setKeyPressed] = useState(false);
  const joinedWord = word.join("");

  const keyPressedHandler = (e) => {
    console.log(e.key);
    if (e.key.match(/[a-z]/i)) {
      // setKeyPressed(true);
      setLetters(e.key);
    }

    checkAndReplace();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPressedHandler);
  }, []);

  const checkAndReplace = (e) => {
    console.log(letters);
  };

  return (
    <div className="text">
      <h3 className="guess">{hiddenWord}</h3>
    </div>
  );
};

export default Guess;
