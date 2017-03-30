import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Away = () => <h1>Not here</h1>
const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{pathname: "/about"}}>About</Link>
    <Link to="/Away">Away</Link>
    </nav>
)
const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/away" component={Away} />
    </div>
  </Router>

)

export default App
