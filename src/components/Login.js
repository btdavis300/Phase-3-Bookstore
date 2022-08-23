import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Books from './Books';
import Home from './Home';

function Login({authorized, setAuthorized}){

    let history = useHistory();

    const [details, setDetails] = useState({name: "", email: "", password: "",});
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("")
    const [human, setHuman] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
      .then((humanArr) => setHuman(humanArr));

    },[])
    console.log(human);

    

    const handleSubmit = e =>{
        e.preventDefault();

        Loggedin(details);
    }

    const Loggedin = details => {
        console.log(details);
    
        if(human.find(c => c.email === details.email) && human.find(p => p.password === details.password)){
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
    
    
  )
}

export default Login