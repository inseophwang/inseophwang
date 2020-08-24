import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from '../Header'
import Home from '../Home'
import About from '../About'
import Work from '../Work'
import Contact from '../Contact'

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);





export default App;