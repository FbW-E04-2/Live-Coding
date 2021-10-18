import React from "react";
import Header from "./Header";
import Article from "./Article";
import Greet from "./Greet";

//parent to child
//props , pass data from parent to child component only
//props drilling (drilling down props to most nested component)

function App() {
  let name = "Nicolas";

  let articlesData = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png",
      text: "first article with 300 words",
    },
    {
      image:
        "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
      text: "second article with 200 words",
    },
    {
      image:
        "https://image.shutterstock.com/image-photo/image-260nw-715074679.jpg",
      text: "third article with 50 words",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png",
      text: "first article with 300 words",
    },
    {
      image:
        "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
      text: "second article with 200 words",
    },
    {
      image:
        "https://image.shutterstock.com/image-photo/image-260nw-715074679.jpg",
      text: "third article with 50 words",
    },
  ];

  /* 
  let allArticles= articlesData.map(article=>{
      return(
        <Article
        image={article.image}
        text={article.text}
      />
      )
  }) */

  return (
    <div className="App">
      <Header />
      <Greet propsName={name} age={34} />
      
      {articlesData.map((article) => {
        return <Article image={article.image} text={article.text} />;
      })}


      {/* {allArticles} */}
    </div>
  );
}

//extends React.Component
//render method is required
/*  class App extends React.Component{
  name="Nicolas"

  render(){
    let name="John"
        return ( <div className="App">
                  <h1>Hi, {name} </h1>
                  </div> )
          
          
          }
 
}  */

export default App;
