import React from 'react'

function BookCard({ book, onHandleDisplay }) {
   

    return (
        <div id="book-card">
            <img
                id="card-image"
                src={book.image}
                alt="book-cover"
                width="150"
                height="225"
                onClick={() => onHandleDisplay(book)}></img>
            <div id="book-card-description">
                <h3>{book.name}</h3>
                <h5>By: {book.author}</h5>
                <h6>${book.price}.00</h6>
            </div>
        </div>



    )
}

export default BookCard