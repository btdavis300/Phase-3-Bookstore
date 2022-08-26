import React, {useEffect, useState} from 'react'
import './Login.css'

function Search() {
    const [allBooks, setAllBooks] = useState([])
    const [text, setText] = useState("")
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/all")
      .then(r => r.json())
      .then(bookArr => setAllBooks(bookArr))
    },[])

    const onSuggestHandler = (text) =>{
        setText(text);
        setSuggestions([]);

    }

    const handleChange = (text) => {
        let matches = []
        if(text.length > 0) {
            matches = allBooks.filter(bookArr => {
                const regex = new RegExp(`${text}`,"gi");
                return bookArr.name.match(regex)
            })
        }
        setSuggestions(matches);
        setText(text);
    }
    return (
        <div className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Search..."
                onChange={(e) => handleChange(e.target.value)}
                value={text}
                onBlur={() =>{
                    setTimeout(() =>{
                        setSuggestions()
                    }, 100);
                }}
            // value={searchTerm}
            // onChange={(e) => onSearchChange(e.target.value)}
            />
            <div className="suggestion-div">{suggestions && suggestions.map((suggestion) =>
            <div className='suggestion' onClick={() => onSuggestHandler(suggestion.name)}>{suggestion.name}</div>
            )}
        </div>
        </div>
    )
}

export default Search
// allBooks.filter(c => c.id)