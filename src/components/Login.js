import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import Books from './Books';
import Home from './Home';

function Login({authorized, setAuthorized}){

    let history = useHistory();

    const adminUser = {
        email: 'admin@example.com',
        password: 'admin123'
      }

    const [details, setDetails] = useState({name: "", email: "", password: "",});
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("")

    

    const handleSubmit = e =>{
        e.preventDefault();

        Loggedin(details);
    }

    const Loggedin = details => {
        console.log(details);
    
        if(details.email === adminUser.email && details.password === adminUser.password){
          console.log("logged in");
          setAuthorized(true);
          history.push('/books')
          setUser({
            name: details.name,
            email: details.email
            
          }
          );
          
        } else{
          console.log("Details not match")
          setError("Details not match")
        }
      }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            < input type="submit" value="LOGIN" />
        </div>
    </form>

    {/* {(user.email != "") ? (<Route exact path="/books">
            <Books />
          </Route>
      ) : (
        <Route exact path="/login">
            <Login />
            </Route>
      )} */}

      {/* {(user.email !== "") ? (<Navigate replace to="/"/>) : (<h2>NotLogged</h2>)} */}
    </div>
    
    
  )
}

export default Login