import React from 'react'

const Form = ({ setLibrary, handleChange, addBookToLibrary, newBook, setNewbook}) => {
  return (
    <div>
        <h1>My book library</h1>
        <p>This is a project for <a href='https://www.theodinproject.com/' target="_blank" rel="noreferrer">The Odin Project</a> in which I have to make a library using React JS</p>
        <p>You can also view the <a href='https://github.com/jhumelbonganciso/library' target="_blank" rel="noreferrer">Github repository</a> of this project.</p>

        <form action="" onSubmit={(e) => addBookToLibrary(e)}>
            <label>
                book name: <input 
                    type={"text"}
                    name={"bookname"}
                    value={newBook.bookname || ""}
                    onChange={handleChange}/>
            </label>

            <label>
                Author: <input 
                    type={"text"}
                    name={"author"}
                    value={newBook.author || ""}
                    onChange={handleChange}/>
            </label>

            <label>
                pages: <input 
                    type={"number"}
                    name={"pages"}
                    value={newBook.pages || ""}
                    onChange={handleChange}/>
            </label>

            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Form