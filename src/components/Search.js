import React from 'react'

function Search() {
    return (
        <div className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Search..."
            // value={searchTerm}
            // onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default Search