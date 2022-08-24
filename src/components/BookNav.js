import React, { useState } from 'react'
import BookCard from './BookCard'

function BookNav() {
    const [category, setCategory] = useState([])

    function handleCategory() {
        console.log("I am clicked!")
    }

    function handleSubcategory(e) {
        if (e.target.textContent.includes("/")) {
            let text = e.target.textContent.toLowerCase().replace("/", "_")

            fetchCategory(text)
        }
        else if (e.target.textContent === "eBooks") {
            fetch("http://localhost:9292/books/ebooks")
                .then(r => r.json())
                .then(data => setCategory(data))
        } else {
            let text = e.target.textContent.toLowerCase().replace(" ", "-")

            fetchCategory(text)
        }
    }

    function fetchCategory(text) {
        fetch(`http://localhost:9292/books/genre/${text}`)
            .then(r => r.json())
            .then(data => setCategory(data))
    }

    const bookResults = category.map((book) => {
        return (
            <BookCard book={book} key={book.id} />
        )
    })

    return (
        <div id="book-nav">
            <ul id="main-cat">
                <li className="category-nav">Fiction</li>
                <li className="category-nav">Nonfiction</li>
                <li onClick={handleSubcategory} className="category-nav">eBooks</li>
            </ul>
            <div className="sub-category-nav">
                <ul className="sub-cat">
                    <li onClick={handleSubcategory}>Classic</li>
                    <li onClick={handleSubcategory}>Crime/Detective</li>
                    <li onClick={handleSubcategory}>Fiction in verse</li>
                    <li onClick={handleSubcategory}>Folklore</li>
                    <li onClick={handleSubcategory}>Fanfiction</li>
                    <li onClick={handleSubcategory}>Realistic fiction</li>
                    <li onClick={handleSubcategory}>Horror</li>
                    <li onClick={handleSubcategory}>Historical fiction</li>
                </ul>
                <ul className="sub-cat">
                    <li onClick={handleSubcategory}>Humor</li>
                    <li onClick={handleSubcategory}>Metafiction</li>
                    <li onClick={handleSubcategory}>Mystery</li>
                    <li onClick={handleSubcategory}>Science fiction</li>
                    <li onClick={handleSubcategory}>Suspense/Thriller</li>
                    <li onClick={handleSubcategory}>Western</li>
                    <li onClick={handleSubcategory}>Mythology</li>
                </ul>
            </div>
            <div className="sub-category-nav">
                <ul className="sub-cat">
                    <li onClick={handleSubcategory}>Biography/Autobiography</li>
                    <li onClick={handleSubcategory}>Essay</li>
                    <li onClick={handleSubcategory}>Textbook</li>
                    <li onClick={handleSubcategory}>Narrative nonfiction</li>
                    <li onClick={handleSubcategory}>Reference book</li>
                </ul>
            </div>
            <div className='book-card-container'>{bookResults}</div>
        </div>
    )
}

export default BookNav