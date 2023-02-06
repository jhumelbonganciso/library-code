import React from 'react'

const Card = ({ book, handleReadChange, handleDelete }) => {

    

    return (
        <div className='card'>
            <p><span className='card-left-text'>Title:</span><span className='book-details'>{book.bookname}</span></p>
            <p><span className='card-left-text'>By:</span><span className='book-details'>{book.author}</span></p>
            <p><span className='card-left-text'>Pages:</span><span className='book-details'>{book.pages}</span></p>
            <div><button
                className='card-btn read-unread-btn'
                style={{
                    backgroundColor: book.read ? "green" : "red",
                    color: "white"
                }}
                onClick={() => handleReadChange(book.id)}
            >{!book.read ? "Not Read" : "Read"}</button></div>
            <div>
                <button
                    className='card-btn remove-btn'
                    onClick={() => handleDelete(book.id)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Card