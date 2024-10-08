import React from "react";

const App = () => {
  return (
    <div>
      <h1>Olá, React!</h1>
      <div>
        <Hello />
      </div>
    </div>
  );
};

const Hello = () => {
  return (
    <h1>Olá, mundo!</h1>
  );
};

export default App;