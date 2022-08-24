import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Books from './components/Books';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {



  // const [books, setBooks] = useState([]);
  const [userAuthorized, setUserAuthorized] = useState(false);
  const [adminAuthorized, setAdminAuthorized] = useState(false);


  // useEffect(() => {
  //   fetch("http://localhost:9292/all")
  //     .then(r => r.json())
  //     .then(bookArr => setBooks(bookArr))
  // }, [])

  // console.log(books)


  return (
    <div className="App">
      <NavBar userAuthorized={userAuthorized} setUserAuthorized={setUserAuthorized} adminAuthorized={adminAuthorized} setAdminAuthorized={setAdminAuthorized} />
      <div id="nav">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books">
            <Books userAuthorized={userAuthorized} />
          </Route>

          <Route exact path="/login">
            <Login userAuthorized={userAuthorized} setUserAuthorized={setUserAuthorized} setAdminAuthorized={setAdminAuthorized} />
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
