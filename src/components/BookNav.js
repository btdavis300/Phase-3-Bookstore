import React from 'react'
import './BookNav.css'

function BookNav() {
    const [category, setCategory] = useState([])

    function handleCategory() {
        console.log("I am clicked!")
    }

    function handleSubcategory(e) {
        if (e.target.textContent.includes("/")) {
            let text = e.target.textContent.toLowerCase().replace("/", "_")

            fetchCategory(text)
        }
        else if (e.target.textContent === "eBooks") {
            fetch("http://localhost:9292/books/ebooks")
                .then(r => r.json())
                .then(data => setCategory(data))
        } else {
            let text = e.target.textContent.toLowerCase().replace(" ", "-")

            fetchCategory(text)
        }
    }

    function fetchCategory(text) {
        fetch(`http://localhost:9292/books/genre/${text}`)
            .then(r => r.json())
            .then(data => setCategory(data))
        console.log(category)
    }

    const bookResults = category.map((book) => {
        return (
            <BookCard book={book} key={book.id} />
        )
    })

    return (
        // <div id="book-nav-container">
        //     <div className="dropdown">
        //         <div className="fiction">
        //             <button>Fiction</button>
        //             <ul>
        //                 <li onClick={handleSubcategory}>Classic</li>
        //                 <li onClick={handleSubcategory}>Crime/Detective</li>
        //                 <li onClick={handleSubcategory}>Fiction in verse</li>
        //                 <li onClick={handleSubcategory}>Folklore</li>
        //                 <li onClick={handleSubcategory}>Fanfiction</li>
        //                 <li onClick={handleSubcategory}>Realistic fiction</li>
        //                 <li onClick={handleSubcategory}>Horror</li>
        //                 <li onClick={handleSubcategory}>Historical fiction</li>
        //                 <li onClick={handleSubcategory}>Humor</li>
        //                 <li onClick={handleSubcategory}>Metafiction</li>
        //                 <li onClick={handleSubcategory}>Mystery</li>
        //                 <li onClick={handleSubcategory}>Science fiction</li>
        //                 <li onClick={handleSubcategory}>Suspense/Thriller</li>
        //                 <li onClick={handleSubcategory}>Western</li>
        //                 <li onClick={handleSubcategory}>Mythology</li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>


        // {/* <div className="sub-category-nav">
        //     <ul className="sub-cat">
        //         <li className='subCategory' onClick={handleSubcategory}>Biography/Autobiography</li>
        //         <li className='subCategory' onClick={handleSubcategory}>Essay</li>
        //         <li className='subCategory' onClick={handleSubcategory}>Textbook</li>
        //         <li className='subCategory' onClick={handleSubcategory}>Narrative nonfiction</li>
        //         <li className='subCategory' onClick={handleSubcategory}>Reference book</li>
        //     </ul>
        // </div> */}


        // <div className='book-card-container'>{bookResults}</div>
        <div id="nav-book-container">
            <div className="dropdown">
                <div className='category'>
                    <button>Fiction</button>
                    <ul>
                        <li className='subCategory' onClick={handleSubcategory}>Classic</li>
                        <li className='subCategory' onClick={handleSubcategory}>Crime/Detective</li>
                        <li className='subCategory' onClick={handleSubcategory}>Fiction in verse</li>
                        <li className='subCategory' onClick={handleSubcategory}>Folklore</li>
                        <li className='subCategory' onClick={handleSubcategory}>Fanfiction</li>
                        <li className='subCategory' onClick={handleSubcategory}>Realistic fiction</li>
                        <li className='subCategory' onClick={handleSubcategory}>Horror</li>
                        <li className='subCategory' onClick={handleSubcategory}>Historical fiction</li>
                        <li className='subCategory' onClick={handleSubcategory}>Humor</li>
                        <li className='subCategory' onClick={handleSubcategory}>Metafiction</li>
                        <li className='subCategory' onClick={handleSubcategory}>Mystery</li>
                        <li className='subCategory' onClick={handleSubcategory}>Science fiction</li>
                        <li className='subCategory' onClick={handleSubcategory}>Suspense/Thriller</li>
                        <li className='subCategory' onClick={handleSubcategory}>Western</li>
                        <li className='subCategory' onClick={handleSubcategory}>Mythology</li>
                    </ul>
                </div>
                <div className='category'>
                    <button>Nonfiction</button>
                    <ul>
                        <li className='subCategory' onClick={handleSubcategory}>Biography/Autobiography</li>
                        <li className='subCategory' onClick={handleSubcategory}>Essay</li>
                        <li className='subCategory' onClick={handleSubcategory}>Narrative nonfiction</li>
                        <li className='subCategory' onClick={handleSubcategory}>Reference book</li>
                        <li className='subCategory' onClick={handleSubcategory}>Textbook</li>
                    </ul>
                </div>
                <div className='category'>
                    <button id="ebooks" onClick={handleSubcategory}>eBooks</button>
                </div>
            </div>
            <div id='book-container'>{bookResults}</div>
        </div>

    )
}

export default BookNav