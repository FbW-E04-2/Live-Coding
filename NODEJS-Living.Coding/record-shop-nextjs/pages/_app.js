import '../styles/globals.css'
import "bulma/css/bulma.css"
import Nav from "../components/Nav"
function App({ Component, pageProps }) {
  
  return <div className="container">
    <Nav/>
    <Component {...pageProps} />

  </div>
}

export default App
