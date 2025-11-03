import Book from "./Book";
import booksData from "./booksData";
import "./Book.css";

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {booksData.map((book) => (
          <Book key={book.id} book={book} name="Matti" /> // name is not needed
        ))}
      </div>
    </div>
  );
}

export default App;
