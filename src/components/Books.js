import React from 'react'
import BookNav from './BookNav'
import { Redirect } from "react-router-dom"

function Books({ onHandleDisplay, userAuthorized }) {
    return (
        <div>
            <BookNav onHandleDisplay={onHandleDisplay} userAuthorized={userAuthorized} />
        </div>
    )
}

export default Books