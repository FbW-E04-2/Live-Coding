
import React,{useState} from 'react';
import Header from './components/Header';
import EmojiContainer from './components/EmojiContainer';
import data from "./json/emoji.json"


function App() {

  const [emojisList,setEmojisList]  = useState(data) // => [10]

  const searchEmojis =(e) => {
    console.log(e.target.value)
    let searchedEmojis= data.filter(emoji=> emoji.keywords.includes(e.target.value))  //=>200

    setEmojisList(searchedEmojis)
  }

  return (
    <div className="App">
        <Header/>
        <div style={{textAlign:"center"}}>
          <input type="text" name="search" onChange={searchEmojis} style={{display:"inline-block", width:"30%", padding:"5px",borderRadius:"10px"}}/>
        </div>
        <EmojiContainer emojisList= {emojisList}/>

    </div>
  );
}


export default App;