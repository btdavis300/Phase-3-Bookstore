import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Books from './components/Books';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  

  const [books, setBooks] = useState([]);
  const[authorized,setAuthorized] = useState(false);
  

  useEffect(() => {
    fetch("http://localhost:9292/all")
      .then(r => r.json())
      .then(bookArr => setBooks(bookArr))
  }, [])

  console.log(books)

  
  return (
    <div className="App">
      <NavBar />
      <div id="nav">
        <Switch>
          <Route exact path="/">
            <Home books={books} />
          </Route>
          <Route exact path="/books">
            <Books authorized={authorized} />
          </Route>
          
          <Route exact path="/login">
            <Login authorized={authorized} setAuthorized={setAuthorized}/>
            </Route>
            <Route exact path="/signup">
              <Signup />
              </Route>
        </Switch>
        
      </div>
    </div>
  );
}

export default App;
