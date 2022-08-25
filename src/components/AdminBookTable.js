import React, { useState } from 'react'
import './Admin.css'

function AdminBookTable({ book, selectedBook, setSelectedBook }) {
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked((clicked) => !clicked);
        setSelectedBook(book)
        console.log(selectedBook)
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