const cicaglisa = () => {
  return (
    <div className="hangman">
      <svg width="200" height="300" className="figure-container">
        <line x1="0" y1="200" x2="40" y2="200" />
        <line x1="20" y1="30" x2="20" y2="200" />
        <line x1="20" y1="30" x2="100" y2="30" />
        <line x1="100" y1="30" x2="100" y2="80" />
        {/* <circle cx="100" cy="90" r="10" fill="transparent" />
        <line x1="100" y1="100" x2="100" y2="130" />
        <line x1="100" y1="100" x2="90" y2="120" />
        <line x1="100" y1="100" x2="110" y2="120" />
        <line x1="100" y1="130" x2="90" y2="150" />
        <line x1="100" y1="130" x2="110" y2="150" /> */}
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};

export default cicaglisa;
