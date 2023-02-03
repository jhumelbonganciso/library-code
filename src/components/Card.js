import React from 'react'

const Card = ({ book, handleReadChange, handleDelete }) => {

    return (
        <div className='card'>
            <p>{book.bookname}</p>
            <p>{book.author}</p>
            <p>{book.pages}</p>
            <div><button
                onClick={() => handleReadChange(book.id)}
            >{!book.read ? "Not Read" : "Read"}</button></div>
            <div>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Card