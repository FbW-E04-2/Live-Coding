import React from "react";
/* import Greet from "./Greet" */
import Article from "./Article";
function App() {
  let data = [
    {
      heading: "Declarative",
      para1:
        "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
      para2:
        "Declarative views make your code more predictable and easier to debug.",
    },
    {
      heading: "Component-Based",
      para1:
        "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      para2:
        "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
    }
  ];
  return (
    <div className="App">
      <h1>My React App</h1>
      {/*   <Greet name="Naqvi"/>
      <Greet name="Joseph"/>
      <Greet name="Tim"/> */}
      { data.map(article=>{
        return(
          <Article heading={article.heading} para1={article.para1} para2={article.para2}/>
        )
      }) }
    
    </div>
  );
}

export default App;
