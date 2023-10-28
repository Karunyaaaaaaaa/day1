import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/About" exact component={About}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
