import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <Weather defaultCity="Perth" />
          </h1>
          <footer className="mt-3">
            This was coded by{" "}
            <a
              href="https://github.com/Ami0480"
              target="_blank"
              rel="noreferrer"
            >
              Ami Fukuyama
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Ami0480/Create-react-app-weather-homework"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://musical-rabanadas-41fa54.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
            .
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
