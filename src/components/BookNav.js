import React from 'react'
import './BookNav.css'

function BookNav() {
    function handleCategory() {
        console.log("I am clicked!")
    }

    function showSubCategory() {
        // subCategory = document.getElementById("sub-category-nav")
        // console.log(subCategory)
    }

    function hideSubCategory() {
        console.log("I have left!")
    }

    const handleCategoryClick = () =>{
        console.log("I have clicked!")
    }

    return (
        // <div id="book-nav">
        //     <ul id="main-cat">
        //         <li onClick={handleCategory}
        //             onMouseEnter={showSubCategory}
        //             onMouseLeave={hideSubCategory}
        //             className="category-nav">
        //             Fiction</li>
        //         <li onClick={handleCategory} className="non-fiction">Nonfiction</li>
        //         <li onClick={handleCategory} className="category-nav">eBooks</li>
        //     </ul>
        //     <div id="dropdown">
                
        //         <ul className="sub-cat">
        //             <li>Classic</li>
        //             <li>Crime</li>
        //             <li>Fiction in verse</li>
        //             <li>Folklore</li>
        //             <li>General Fiction</li>
        //             <li>Graphic Novel</li>
        //             <li>Horror</li>
        //         </ul>
        //         <ul className="sub-cat">
        //             <li>Historic Fiction</li>
        //             <li>Humor</li>
        //             <li>Mystery</li>
        //             <li>Science Fiction</li>
        //             <li>Suspense/Thriller</li>
        //             <li>Western</li>
        //         </ul>
        //     </div>
        //  </div>

        <div class="dropdown">
            <div className='fiction'>
                <button>Fiction</button>
                <ul>
                <li onClick={handleCategoryClick}>Classic</li>
                <li class='subCategory'>Crime</li>
                <li class='subCategory'>Fiction in verse</li>
                <li class='subCategory'>Folklore</li>
                <li class='subCategory'>General Fiction</li>
                <li class='subCategory'>Graphic Novel</li>
                <li class='subCategory'>Horror</li>
            </ul>
            </div>
        </div>
    )
}

export default BookNav