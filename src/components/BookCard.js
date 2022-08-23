import React from 'react'

function BookCard({ book }) {
    const { name, author, price, image } = book

    return (
        <div id="book-card">
            <img src={image} alt="book-cover" width="150" height="225"></img>
            <div id="book-card-description">
                <h3>{name}</h3>
                <h4>By: {author}</h4>
                <p>${price}.00</p>
            </div>
        </div>
    )
}

export default BookCard