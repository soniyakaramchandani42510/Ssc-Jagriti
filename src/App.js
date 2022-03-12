import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Timer from "./components/Timer";
import Workshops from "./components/Workshops";


// import Workshops from './components/Workshops'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
     
        <Switch>
          <Route path="/about">
          <Navbar />
            <About />
            <Footer />
          </Route>

          <Route path="/workshops">
          <Navbar />
            <Workshops />
            <Footer />
          </Route>
          
          <Route path="/">
          <Navbar />
            <Home />
            {/* <Timer/> */}
           
            <Footer />
          </Route>
         
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
