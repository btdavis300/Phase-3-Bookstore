import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Books from './Books';
import Home from './Home';
import './Login.css'

function Login({userAuthorized, setUserAuthorized, setAdminAuthorized}){

    let history = useHistory();

    const [details, setDetails] = useState({name: "", email: "", password: "",});
    const [error, setError] = useState("")
    const [human, setHuman] = useState([])
    const [isUser, setIsUser] = useState(true);
    const [admin, setAdmin] = useState([])


    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
      .then((humanArr) => setHuman(humanArr));

    },[])

    useEffect(() => {
      fetch("http://localhost:9292/admins")
      .then((r) => r.json())
    .then((adminArr) => setAdmin(adminArr));

  },[])

    const handleSubmit = e =>{
        e.preventDefault();
        {isUser ? Loggedin(details) : AdminLogin(details)};
    }

    const Loggedin = details => {
        if(human.find(c => c.email === details.email)  && human.find(p => p.password === details.password) ){
          setUserAuthorized(true);
          history.push('/books')
        }else{
          setError("Details not match")
        }
      }

      const AdminLogin = details => {
        if(admin.find(c => c.email === details.email)  && admin.find(p => p.password === details.password) ){
          setUserAuthorized(true);
          setAdminAuthorized(true);
          history.push('/')
        }else{
          setError("Details not match")
        }
      }

  return (
    <div className="main">
    <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>Login</h2>
            <label className='switch'>
              <input onClick={(e)=> setIsUser(!isUser)} type="checkbox"></input>
              <span className='slider round'></span>
              {isUser ? <h2>User</h2> : <h2>Admin</h2>}

            </label>
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
    </div>
    
    
  )
}

export default Login