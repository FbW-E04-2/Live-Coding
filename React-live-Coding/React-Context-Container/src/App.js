import React from "react";
import Container from "./Context/Container";
import Child from "./Child"

function App() {
  return (
    <Container>
      <div className="App">
        <h1>My React App</h1>
        <Child/>
      </div>
    </Container>
  );
}

export default App;
