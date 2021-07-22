import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="hangman">
          <svg width="200" height="300" className="figure-container">
            <line x1="0" y1="200" x2="40" y2="200" />
            <line x1="20" y1="30" x2="20" y2="200" />
            <line x1="20" y1="30" x2="100" y2="30" />
            <line x1="100" y1="30" x2="100" y2="80" />
            <circle cx="100" cy="90" r="10" fill="transparent" />
            <line x1="100" y1="100" x2="100" y2="150" />
            <line x1="100" y1="100" x2="90" y2="120" />
            <line x1="100" y1="100" x2="110" y2="120" />
            <line x1="100" y1="150" x2="90" y2="170" />
            <line x1="100" y1="150" x2="110" y2="170" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="text">
          <h3 className="guess">Sample text</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
