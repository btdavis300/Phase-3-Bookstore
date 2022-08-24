import React from 'react'
import BookNav from './BookNav'
import { Redirect } from "react-router-dom"

function Books({ onHandleDisplay }) {
    return (
        <div>
            <BookNav onHandleDisplay={onHandleDisplay} />
        </div>
    )
}

export default Books