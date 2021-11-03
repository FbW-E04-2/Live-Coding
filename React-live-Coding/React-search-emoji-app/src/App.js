
import React,{useState} from 'react';
import Header from './components/Header';
import EmojiContainer from './components/EmojiContainer';
import data from "./json/emoji.json"


function App() {

  const [emojisList,setEmojisList]  = useState(data) // => [10]

  const searchEmojis =(e) => {
    console.log(e.target.value)
    let searchedEmojis= data.filter(emoji=> emoji.keywords.includes(e.target.value))  //=>200

    setEmojisList(searchedEmojis) //set state
  }

  return (
    <div className="App">
        <Header/>
        <div style={{textAlign:"center"}}>
          <input type="text" name="search" onChange={searchEmojis}/>
        </div>
        <EmojiContainer emojisList= {emojisList}/>

    </div>
  );
}


export default App;