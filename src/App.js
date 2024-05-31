import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="london" />
      <footer>
        This project was coded by
        <a
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/helen-isted/"
          target="_blank"
        >
          Helen Isted
        </a>
        and is
        <a
          rel="noreferrer noopener"
          href="https://github.com/HelenIsted"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
