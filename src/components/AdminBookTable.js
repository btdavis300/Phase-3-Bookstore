import React from 'react'

function AdminBookTable({ book }) {
    return (
        <>
            <tr>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.published_date}</td>
                <td>{book.price}</td>
                <td>{book.created_at}</td>
                <td>{book.updated_at}</td>
                <td><a href={book.image}>Image Link</a></td>
                <td>{book.description}</td>
            </tr>
        </>
    )
}

export default AdminBookTable