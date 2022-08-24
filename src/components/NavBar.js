import React from 'react'
import Search from './Search';
import { Link } from "react-router-dom";

function NavBar({userAuthorized, setUserAuthorized, setAdminAuthorized, adminAuthorized}) {

    const handleOnClick = () => {
        setUserAuthorized(false);
        setAdminAuthorized(false);
    }


    return (
        <div className="topnav">
            {adminAuthorized ? <Link to="/">Admin</Link> : <Link to="/">Home</Link>}
            {adminAuthorized ? <Link to="/Books">User's View</Link> : <Link to="/Books">Books</Link>}
            {userAuthorized ?  ( <Link to="/" onClick={handleOnClick}>Logout</Link>): (
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