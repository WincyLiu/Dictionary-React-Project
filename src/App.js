import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <main>
            <Dictionary defaultKeyword="dictionary" />
          </main>
        </header>
        <footer className="App-footer">
     This project was coded by {""}
          <a
            href="https://stupefied-snyder-c092d0.netlify.app/index.html#"
            target="_blank"
            rel="noreferrer"
          >
            Wincy Liu
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/WincyLiu/Dictionary-React-Project"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>
    </footer>
      </div>
    </div>
  );
}

export default App;
