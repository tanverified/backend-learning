const express = require("express");
const books = require("./booksdata");

const app = express();

//# Middleware
app.use(express.json());

//# ROUTES
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Book Store API",
  });
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const book = books.filter((book) => book.id === bookId);
  book.length
    ? res.status(200).json(book)
    : res.status(404).json({
        message: "404 - Book with the id not found!",
      });
});

app.post("/newBook", (req, res) => {
    console.log(" ---------- ", req.body, !req.body)
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Bad request - All fields 'title', 'author', price and 'genre' are required.",
    });
  }

  const { title, author, genre, price, available } = req.body;

  if (!title || !author || !genre || !price) {
    return res.status(400).json({
      success: false,
      message: "Failed to add book. 'title', 'author', price and 'genre' are required.",
    });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    price,
    available: available || true,
  };
  books.push(newBook);

  res.status(201).json({
    success: true,
    message: "Book added successfully",
    book: newBook,
  });
});

//# server configs
const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is running on port 🚀", PORT);
});
