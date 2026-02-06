import React, { useState } from "react";
import "./BookCollectionManager.css";


//book component
function Book({book, onDelete, index}){
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Language: {book.language}</p>
      <p>Edition: {book.edition}</p>
      <p>Pages: {book.pages}</p>
      <p>Rating: {book.rating}/5</p>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  )
}

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [page, setPage] = useState("");
  const [rating, setRating] = useState("");

  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  // Add a new book to the list
  function addBook() {
    if (title.trim() === "" || author.trim() === "") {
      return;
    }
    const newBook = {
      title,
      author,
      genre,
      language,
      edition,
      pages: Number(page) || 0,
      rating: Number(rating) || 0,
    };
    
    setBooks((b) => [...b, newBook]);
    setTitle("");
    setAuthor("");
    setGenre("");
    setLanguage("");
    setEdition("");
    setPage("");
    setRating(""); // Clear the input fields
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="app-container">
      <h1>Book Collection Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
          className="input-field"
        />
        {/* genre */}
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="input-field"
        >
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>

        {/* language */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="input-field"
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Finnish">Finnish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
       
        {/* edition */}
        <select
          type="text"
          placeholder="Enter edition..."
          value={edition}
          onChange={(e) => setEdition(e.target.value)}
          className="input-field"
        >
          <option value="">Select Edition</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
        </select>

        {/*page*/}

        <input
          type="number"
          placeholder="Enter number of pages..."
          value={page}
          onChange={(e) => setPage(e.target.value)}
          className="input-field"
          min="1"
        />
        {/*rating*/}
        <input
          type="number"
          placeholder="Enter rating (0-5)..."
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="input-field"
          min="0"
          max="5"
          step="0.1"
        />

        <button onClick={addBook} className="add-button">
          Add Book
        </button>
      </div>

      <div className="books-section">
        <h2>Your Books ({books.length})</h2>
        {books.length === 0 ? (
          <p className="empty-message">No books yet. Add one to get started!</p>
        ) : (
            <ol className="books-list">
            {books.map((book, index) => (
              <Book
                key={index}
                book={book}
                onDelete={() => deleteBook(index)}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default BookCollectionManager;