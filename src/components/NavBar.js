import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div id="topnav">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
        </div>
    )
}

export default NavBar