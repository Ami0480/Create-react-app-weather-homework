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
        </header>
      </div>
    </div>
  );
}

export default App;
