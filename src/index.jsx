import { h, Component, render } from "preact";
import { Router, route } from "preact-router";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Terms from "./Components/Terms/Terms.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";




const App = () => (
  <main>
    <Navbar />
    <Router>
      <Home path="/" />
      <Terms path="/terms" />
    </Router>
  </main>
);

/** our index route */

render(<App />, document.body, document.body.querySelector('main'));