
import React from 'react';
import "./App.scss" 
import ChildComponent from "./ChildComponent"

//styled-components (package)
let spanStyling = {color:"red",backgroundColor:"green",padding:"5px"}

function App() {
  //{{ for styling}}
  
  //{ JS}
  return (
    //JSX
    <div className="main container bg-success" >
      <ChildComponent/>
      <h1 className="header alert alert-primary" >My React App <span style={spanStyling}> ! </span></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, provident dolorum unde non sunt distinctio, consequatur deleniti ea magni delectus illo blanditiis placeat maiores omnis similique exercitationem labore, architecto voluptatem ab atque! Accusamus quaerat, eius numquam velit ea adipisci culpa, aliquid expedita beatae voluptas, neque aperiam. Asperiores ipsa inventore, alias iusto adipisci quidem ex deserunt ratione soluta, animi ipsum. Corporis quasi explicabo aperiam, voluptas atque ullam quod recusandae repudiandae inventore adipisci voluptates exercitationem porro minus soluta ipsa! Cupiditate nemo, culpa nulla nostrum quibusdam unde accusamus labore placeat praesentium itaque eum at minima molestias aut soluta recusandae, ut perferendis expedita voluptates. Nihil cupiditate quas iste rem, ducimus nisi alias consequuntur excepturi deleniti. Sapiente, enim. Reprehenderit, quidem eaque voluptate odio ut rem temporibus laborum in repellendus hic aut tempora odit molestiae! Maxime eveniet explicabo pariatur itaque, labore repudiandae modi autem eaque unde quasi fugit delectus iure aliquid praesentium, quia atque repellat consequuntur amet vel beatae, ducimus debitis magni? Neque quisquam et, saepe veritatis, asperiores eum accusantium debitis sapiente quasi, molestias recusandae atque aut voluptas ex maiores vero hic corporis dolore consequuntur. Ipsum, natus dolorem molestias tempora praesentium odio sed placeat explicabo eveniet assumenda architecto aliquam facere saepe dignissimos corporis nesciunt voluptatum! Quasi?</p>
      <h1 className="header">Second heading <span style={spanStyling}> ! </span></h1>
    </div>
  );
}


export default App;