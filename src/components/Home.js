import React from 'react'
import BookCard from './BookCard'

function Home({ books }) {

    const bookCard = books.map((book) => {
        return (
            <BookCard book={book} key={book.id} />
        )
    })

    return (
        <div>
            <div id="title-box">
                <div id="title-container">
                    <h1 id="book-store-name">FLATTY'S BOOKS</h1>
                </div>
            </div>
            <div id="book-card-container">
                {bookCard}
            </div>
        </div>
    )
}

export default Home