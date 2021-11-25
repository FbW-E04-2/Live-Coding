import React from "react";
import Container from "./context/Container";
import Counter from "./Counter";
import Tasks from "./Tasks";

function App() {
  return (
    <Container>
      <div className="App">
        <Counter />
        <Tasks />
      </div>
    </Container>
  );
}

export default App;
