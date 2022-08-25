import React from 'react'
import AdminBookTable from './AdminBookTable'
import './Admin.css'

function Admin({ books }) {
    const bookDatabaseTable = books.map((book) => {
        return (
            <AdminBookTable book={book} key={`book${book.id}`} />
        )
    })

    return (
        <div id="table-box">
            <div id="admin-button-container">
                <button className="admin-button">Update Book</button>
                <button className="admin-button">Add Book</button>
                <button className="admin-button">Delete Book</button>
            </div>
            <div id="table-container">
                <table>
                    <tr>
                        <th id="id-column">Book ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th id="genre-column">Genre</th>
                        <th id="published-date-column">Published Date</th>
                        <th id="price-column">Book Price</th>
                        <th>Uploaded Date</th>
                        <th>Updated At</th>
                        <th>Image URL</th>
                        <th>Book Description</th>
                    </tr>
                    {bookDatabaseTable}
                </table>
            </div>
        </div>
    )
}

export default Admin