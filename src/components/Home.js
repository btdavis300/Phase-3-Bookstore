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
            <h1 id="book-store-name">Flatty's Books</h1>
            {bookCard}
        </div>
    )
}

export default Home