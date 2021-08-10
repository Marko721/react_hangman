import "./App.css";
import Cicaglisa from "./Components/Cicaglisa";
import Guess from "./Components/Guess";
import Generate from "./Components/Generate";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Generate />
        <Cicaglisa />
        <Guess />
      </div>
    </div>
  );
}

export default App;
