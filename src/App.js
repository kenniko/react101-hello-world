import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorldBtn from "./components/helloWorldBtn";

class App extends React.Component {
  render() {
    const appName = "Hello World App";
    const appNumber = "Second";

    const title = (
      <h1 className="app-title">
        My {appNumber} React App, {appName}
      </h1>
    );

    // console.log(title); // My Second React app, Hello World App

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {title}
          <HelloWorldBtn appTitle={title} />
        </header>
      </div>
    );
  }
}

export default App;
