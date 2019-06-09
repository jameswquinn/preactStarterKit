import { h, Component, render } from "preact";
import { Router, route } from "preact-router";
import "./index.css"
import Home from "./Components/Home/Home.jsx";
import Terms from "./Components/Terms/Terms.jsx"




const App = () => (
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/terms">Terms</a>
        </nav>
 
    <Router>
        <Home path="/" />
        <Terms path="/terms" />
    </Router>
    </header>
);

/** our index route */

render(<App />, document.body, document.body.querySelector('header'));