import React from 'react'
import './Login.css'

function Search({ onSearchChange, searchTerm }) {


    return (
        <div className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Search..."
                onChange={(e) => onSearchChange(e.target.value)}
                value={searchTerm}
            />
        </div>
    )
}

export default Search