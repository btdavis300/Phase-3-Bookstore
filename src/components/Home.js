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
            <h2 className="home-page-label"><em>Popular Books</em></h2>
            <div className="books-card-box">
                <div className="book-card-container">
                    {bookCard}
                </div>
            </div>
            <h2 className="home-page-label"><em>Newest Books</em></h2>
            <div className="books-card-box">
                <div className="book-card-container">
                    {bookCard}
                </div>
            </div>
        </div>
    )
}

export default Home