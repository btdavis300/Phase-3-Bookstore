import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="nav">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
