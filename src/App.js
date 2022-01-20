import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [paraNumber, setPeraNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(paraNumber);

    if (paraNumber <= 0) amount = 1;
    if (paraNumber > data.length - 1) amount = data.length - 1;

    setParagraphs(data.slice(0, amount));
  };

  return (
    <section id="paraContainer">
      <header>
        <h3>Tired of boring lorem ipsum?</h3>
      </header>
      <form>
        <div className="form-item">
          <label for="paraNumber">Paragraphs:</label>
          <input
            type="number"
            id="paraNumber"
            onChange={(e) => setPeraNumber(e.target.value)}
            value={paraNumber}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Generate
          </button>
        </div>
      </form>
      <div id="outputContainer">
        {paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </div>
    </section>
  );
}

export default App;
