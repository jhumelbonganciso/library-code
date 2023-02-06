
import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  const [library, setLibrary] = useState([])

  const [newBook, setNewbook] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewbook(values => ({ ...values, [name]: value }))
  }

  const handleDelete = (id) => {
    const libraryItems = library.filter(book => book.id !== id)
    setLibrary(libraryItems)
  }

  const addBookToLibrary = (e) => {
    let id = 0
    e.preventDefault()

    if(library.length === 0) {
      id = 1;
    } else {
      id = library[library.length - 1].id + 1
    }

    const book = {
      id: id,
      bookname: newBook.bookname,
      author: newBook.author,
      pages: newBook.pages,
      read: false
    }

    setLibrary(library.concat(book))
    setNewbook({})
  }

  const handleReadChange = (id) => {
      const libraryItems = library.map(book => book.id === id? {...book, read: !book.read} : book)
      setLibrary(libraryItems)

  }
  

  return (
    <div className="App">
      <Navbar />
      <Form
        setLibrary={setLibrary}
        handleChange={handleChange} 
        addBookToLibrary={addBookToLibrary}
        newBook={newBook}
        setNewbook={setNewbook}/>

      <Display 
        library={library}
        handleReadChange={handleReadChange}
        handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
