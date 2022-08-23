import React from 'react'
import Search from './Search';
import { Link } from "react-router-dom";

function NavBar({authorized, setAuthorized}) {


    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            
             {/* <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>  */}

            {authorized ?  ( <Link to="/" onClick={() => setAuthorized(false)}>Logout</Link>): (
            <div>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
                </div>
                
                )  }
            
            <Search />
        </div>
    )
}

export default NavBar