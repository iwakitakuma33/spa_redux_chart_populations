import React from "react";
import Main from "./components/Main";
import { contents } from "./constants/contents";

const App: React.FC = () => {
  return (
    <div className="App">
      <header style={{ textAlign: "center" }}>
        <h1>{contents.title}</h1>
      </header>
      <Main />
    </div>
  );
};

export default App;
