import { Button } from "antd";
import { FC } from "react";
import "./App.css";
import logo from "./logo.svg";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>😱</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 😱
        </p>
        <Button type="dashed">Hello</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>hello</a>
      </header>
    </div>
  );
};

export default App;
