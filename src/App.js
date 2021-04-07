import logo from "./logo.svg";
import "./App.css";

function App() {
  const appName = "Hello World App";
  const appNumber = "Second";

  const title = (
    <h1 className="app-title">
      My {appNumber} React App, {appName}
    </h1>
  );

  console.log(title); // My Second React app, Hello World App

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {title}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
