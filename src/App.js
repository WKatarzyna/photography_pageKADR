import React from "react";
import "./App.css";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Home from './components/Home';
import ContactPage from "./components/ContactPage";

const App = () => {
    return (
        <div className="App">
            <Router>
                {/*<Route path="/contact" component={Navigation}/>*/}
                <Route path="/contact"  component={ContactPage}/>
                <Route path="/" exact component={Home}/>
            </Router>
        </div>
    );
}

export default App;