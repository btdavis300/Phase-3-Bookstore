import React from 'react'
import Search from './Search';
import { Link } from "react-router-dom";

function NavBar({ userAuthorized, setUserAuthorized, setAdminAuthorized, adminAuthorized, setShowCurrentBook }) {

    const handleOnClick = () => {
        setUserAuthorized(false);
        setAdminAuthorized(false);
        setShowCurrentBook(false);
    }


    return (
        <div className="topnav">
            {adminAuthorized ? <Link onClick={() => setShowCurrentBook(false)} to="/admin">Admin</Link> : <Link onClick={() => setShowCurrentBook(false)} to="/">Home</Link>}
            {adminAuthorized ? <Link onClick={() => setShowCurrentBook(false)} to="/Books">User's View</Link> : <Link onClick={() => setShowCurrentBook(false)} to="/Books">Books</Link>}
            {userAuthorized ? (<Link to="/" onClick={handleOnClick}>Logout</Link>) : (
                <div>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>

            )}

            <Search />
        </div>
    )
}

export default NavBar