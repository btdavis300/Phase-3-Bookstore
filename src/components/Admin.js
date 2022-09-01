import React, { useState } from 'react'
import AdminBookTable from './AdminBookTable'
import { Redirect } from "react-router-dom"
import './Admin.css'

function Admin({ books, setBooks, adminAuthorized }) {
    const [selectedBook, setSelectedBook] = useState({})
    const [showPrice, setShowPrice] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [newPrice, setNewPrice] = useState({ price: "" })
    const [addForm, setAddForm] = useState({
        name: "",
        author: "",
        genre: "",
        published_date: 0,
        price: 0,
        image: "",
        description: ""
    })

    const bookDatabaseTable = books.map((book) => {
        return (
            <AdminBookTable book={book} key={`book${book.id}`} setSelectedBook={setSelectedBook} selectedBook={selectedBook} />
        )
    })

    function onUpdate() {
        setShowPrice(true)
    }

    function onAdd() {
        setShowAdd(true)
        console.log(showAdd)
    }

    function handleDelete() {
        fetch(`http://localhost:9292/all/${selectedBook.id}`, {
            method: "DELETE",
        })
        alert(`${selectedBook.name} has been deleted from database.`)
        setBooks(books.filter(book => book.id !== selectedBook.id))
    }

    function handleUpdate(e) {
        e.preventDefault();
        const updatedPrice = {
            price: newPrice.price
        }

        fetch(`http://localhost:9292/all/${selectedBook.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPrice),
        })
            .then(r => r.json())
            .then(setBooks(books))
        setShowPrice(false)

    }

    function handleAdd(e) {
        e.preventDefault();
        const newBook = {
            name: addForm.name,
            author: addForm.author,
            genre: addForm.genre,
            cart: false,
            favorite: false,
            ebook: false,
            published_date: addForm.published_date,
            price: addForm.price,
            image: addForm.image,
            description: addForm.description
        }
        fetch("http://localhost:9292/books/new_books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
        setBooks([...books, newBook])
        setShowAdd(false)

    }

    function handleUpdatePriceForm(event) {
        setNewPrice({
            ...newPrice,
            [event.target.name]: event.target.value
        })
        console.log(newPrice)
    }
    if (!adminAuthorized) {
        return <Redirect to={'/login'} />
    }

    return (
        <div>



            {showPrice ?

                <form onSubmit={handleUpdate}>
                    <div className="main">
                        <div className="form-inner">
                            <label>Set Price</label>
                            <div className="form-group">
                                <input type="text" name="price" placeholder="New Price" onChange={handleUpdatePriceForm} />
                            </div>
                            < input type="submit" value="Submit Price" />
                        </div>
                    </div>
                </form>

                : showAdd ?

                    <form onSubmit={handleAdd}>
                        <div className="main">
                            <div className="form-inner">
                                <label>Book Title</label>
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Book Title" onChange={e => setAddForm({ ...addForm, name: e.target.value })} value={addForm.name} />
                                </div>
                                <label>Book Author</label>
                                <div className="form-group">
                                    <input type="text" name="author" placeholder="Book Author" onChange={e => setAddForm({ ...addForm, author: e.target.value })} value={addForm.author} />
                                </div>
                                <label>Book Genre</label>
                                <div className="form-group">
                                    <input type="text" name="genre" placeholder="Book Genre" onChange={e => setAddForm({ ...addForm, genre: e.target.value })} value={addForm.genre} />
                                </div>
                                <label>Published Date</label>
                                <div className="form-group">
                                    <input type="number" name="published_date" placeholder="Published Date" onChange={e => setAddForm({ ...addForm, published_date: e.target.value })} value={addForm.published_date} />
                                </div>
                                <label>Price</label>
                                <div className="form-group">
                                    <input type="text" name="price" placeholder="Book Price" onChange={e => setAddForm({ ...addForm, price: e.target.value })} value={addForm.price} />
                                </div>
                                <label>Image Link</label>
                                <div className="form-group">
                                    <input type="text" name="image" placeholder="Image URL" onChange={e => setAddForm({ ...addForm, image: e.target.value })} value={addForm.image} />
                                </div>
                                <label>Description</label>
                                <div className="form-group">
                                    <input type="text" name="description" placeholder="description" onChange={e => setAddForm({ ...addForm, description: e.target.value })} value={addForm.description} />
                                </div>
                                < input type="submit" value="Submit Book" />
                            </div>
                        </div>
                    </form>

                    :

                    <div id="table-box">
                        <div id="admin-button-container">
                            <button className="admin-button" onClick={onUpdate}>Update Price</button>
                            <button className="admin-button" onClick={onAdd}>Add Book</button>
                            <button className="admin-button" onClick={handleDelete}>Delete Book</button>
                        </div>
                        <div id="table-container">
                            <table>
                                <tbody>
                                    <tr id="book-headers">
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
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Admin