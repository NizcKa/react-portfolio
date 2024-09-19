import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "./portfolio-styles.css"
import Navbar from "./components/navbar.js"
import Profile from "./components/profile.js"
import Portfolio from './components/portfolio.js'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Profile></Profile>
      <Portfolio></Portfolio>
    </div>

  );

}

export default App;
