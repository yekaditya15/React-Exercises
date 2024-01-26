import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = () => {
    setLoading(true);

    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data.setup + "..." + response.data.punchline);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Joke Generator</h1>
      </header>
      <main className="app-main">
        <button className="get-joke-btn" onClick={getJoke} disabled={loading}>
          {loading ? "Loading..." : "Get Joke Right Now"}
        </button>
        {joke && <p className="joke">{joke}</p>}
      </main>
      <footer className="app-footer">
        <p>Powered by the Official Joke API</p>
      </footer>
    </div>
  );
}

export default App;
