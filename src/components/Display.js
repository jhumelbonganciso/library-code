import React from 'react'
import Card from './Card'

const Display = ({ library, handleReadChange, handleDelete }) => {
  return (
    <div className='display'>
        {library.map(book => (
            <Card 
                key={book.id}
                book={book}
                handleReadChange={handleReadChange}
                handleDelete={handleDelete}
            />
        ))}
    </div>
  )
}

export default Display