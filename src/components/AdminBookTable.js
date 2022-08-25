import React, { useState } from 'react'
import './Admin.css'

function AdminBookTable({ book }) {
    const [clicked, setClicked] = useState(false)
    const [bookID, setBookID] = useState(0)
    function handleClick() {
        setClicked((clicked) => !clicked);
        setBookID(book.id)
        console.log(bookID)
    }

    return (
        <>
            <tr>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.id}</td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.name}</td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.author}</td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.genre}</td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.published_date}</td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.price}</td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.created_at}</td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.updated_at}</td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}><a href={book.image}>Image Link</a></td>
                <td onClick={handleClick} className={clicked ? 'book-row' : ''}>{book.description}</td>
            </tr>
        </>
    )
}

export default AdminBookTable