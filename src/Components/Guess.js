import { useState } from "react";

const Guess = () => {
  const [hiddenWord, setHiddenWord] = useState([]);
  const [letters, setLetters] = useState([]);

  // console.log(word);

  document.addEventListener("keypress", (e) => {
    // setLetters(e.key);
    letters.push(e.key);
    console.log(letters);
  });

  return (
    <div className="text">
      <h3 className="guess">{hiddenWord}</h3>
    </div>
  );
};

export default Guess;
