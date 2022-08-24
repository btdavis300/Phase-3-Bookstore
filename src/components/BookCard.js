import React from 'react'

function BookCard({ book }) {
    const { name, author, price, image } = book

    return (
        <div id="book-card">
            <img id="card-image" src={image} alt="book-cover" width="150" height="225"></img>
            <div id="book-card-description">
                <h3>{name}</h3>
                <h5>By: {author}</h5>
                <h6>${price}.00</h6>
            </div>
        </div>



    )
}

export default BookCard