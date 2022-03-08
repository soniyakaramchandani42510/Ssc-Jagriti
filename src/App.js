
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Events from './components/Events'
import Workshops from './components/Workshops'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    
<Router>
    <Switch>
          <Route path="/about">
          <Navbar/>
            <About />
          </Route>
          <Route path="/events">
          <Navbar/>
            <Events />
          </Route>
          <Route path="/workshops">
            <Workshops />
          </Route>
          <Route path="">
            <Home />
            <Footer/>
          </Route>
        </Switch>
        </Router>
    
    
    </>
  );
}

export default App;
