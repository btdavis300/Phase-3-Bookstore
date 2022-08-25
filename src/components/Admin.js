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
        <div>
            <table>
                <tr>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Published Date</th>
                    <th>Book Price</th>
                    <th>Uploaded Date</th>
                    <th>Updated At</th>
                    <th>Image URL</th>
                    <th>Book Description</th>
                </tr>
                {bookDatabaseTable}
            </table>
        </div>
    )
}

export default Admin