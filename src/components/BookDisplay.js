import React from 'react'
import './BookDisplay.css'

function BookDisplay({ book }) {
    return (
        <div>
            <div id="header-box">
                <div id="book-header-container">
                    <h1 id="book-header"><em>{book.name}</em></h1>
                </div>
            </div>
            <div id="full-display">
                <div id="book-display-left-details">
                    <img src={book.image} alt={book.name} width="280px" height="420px"></img>
                </div>
                <div id="book-display-right-details">
                    <div id="right-top-detail-display">
                        <section>
                            <ul id="book-information">
                                <li><strong>{book.name}</strong></li>
                                <li><em>written by: {book.author}</em></li>
                                <li>genre: {book.genre}</li>
                                <li>year: {book.published_date}</li>
                                <li id="book-display-price"><strong>${book.price}</strong></li>
                            </ul>
                            <button id="add-to-cart">Add to Cart</button>
                        </section>
                    </div>
                    <div id="right-buttom-detail-display">
                        <section>
                            <p>{book.description}</p>
                        </section>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BookDisplay