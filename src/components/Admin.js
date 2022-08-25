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