import React from 'react'

const Form = ({ setLibrary, handleChange, addBookToLibrary, newBook, setNewbook }) => {
    return (
        <div className='form-container'>
            <div className="form-section">
                <h1>Add your books!</h1>
                <p>This is a project for <a href='https://www.theodinproject.com/' target="_blank" rel="noreferrer">The Odin Project</a> in which I have to make a library using React JS.</p>
                <p className='p-last-child'>You can also view the <a href='https://github.com/jhumelbonganciso/library' target="_blank" rel="noreferrer">Github repository</a> of this project.</p>

                <form action="" onSubmit={(e) => addBookToLibrary(e)}>
                    <label>
                        <p>Book</p> <input
                            type={"text"}
                            name={"bookname"}
                            value={newBook.bookname || ""}
                            onChange={handleChange} />
                    </label>

                    <label>
                        <p>Author</p> <input
                            type={"text"}
                            name={"author"}
                            value={newBook.author || ""}
                            onChange={handleChange} />
                    </label>

                    <label>
                        <p>Pages</p> <input
                            type={"number"}
                            name={"pages"}
                            value={newBook.pages || ""}
                            onChange={handleChange} />
                    </label>

                    <div className='submit-btn-container'>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form