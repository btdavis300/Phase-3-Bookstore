import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function Signup() {
    const [details, setDetails] = useState({name: "", email: "", password: "",});
    const [error, setError] = useState("")
    let history = useHistory();

    const handleSubmit = e =>{
        e.preventDefault();
        fetch("http://localhost:9292/users/new_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
      }),
    })
    history.push('/login')

    }


  return (
    <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>SignUp</h2>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}  />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}  />
            </div>
            < input type="submit" value="SIGNUP" />
        </div>
    </form>
  )
}

export default Signup