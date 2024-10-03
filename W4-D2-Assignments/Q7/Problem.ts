// TypeScript Library Inventory Management Application

// Enums for Book Genres
enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Mystery = "Mystery",
    Thriller = "Thriller",
    Fantasy = "Fantasy",
    ScienceFiction = "Science Fiction",
  }
  
  // Union Type for Book Formats
  type BookFormat = "Paperback" | "Hardcover" | "Ebook";
  
  // Interface for Book Structure
  interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    quantity: number;
  }
  
  // Intersection Type for Library Book
  type LibraryBook = Book & {
    format: BookFormat;
  };
  
  // Interface for Library Inventory
  interface Library {
    inventory: LibraryBook[];
  }
  
  // Initialize Library Inventory
  const library: Library = {
    inventory: [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: Genre.Fiction,
        quantity: 3,
        format: "Hardcover",
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: Genre.ScienceFiction,
        quantity: 5,
        format: "Paperback",
      },
      {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: Genre.Fiction,
        quantity: 2,
        format: "Ebook",
      },
      {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: Genre.Fiction,
        quantity: 4,
        format: "Paperback",
      },
    ],
  };
  
  // Function to Display Library Inventory
  function displayInventory(library: Library): void {
    console.log("Library Inventory:");
    library.inventory.forEach((book) => {
      console.log(
        `ID: ${book.id}, Title: "${book.title}", Author: ${book.author}, Genre: ${book.genre}, Quantity: ${book.quantity}, Format: ${book.format}`
      );
    });
  }
  
  // Function to Search for Books by Title
  function searchByTitle(library: Library, title: string): LibraryBook[] {
    return library.inventory.filter((book) => book.title.includes(title));
  }
  
  // Function to Search for Books by Author
  function searchByAuthor(library: Library, author: string): LibraryBook[] {
    return library.inventory.filter((book) => book.author.includes(author));
  }
  
  // Function to Search for Books by Genre
  function searchByGenre(library: Library, genre: Genre): LibraryBook[] {
    return library.inventory.filter((book) => book.genre === genre);
  }
  
  // Function to Update Book Quantity
  function updateBookQuantity(library: Library, id: number, newQuantity: number): void {
    const book = library.inventory.find((book) => book.id === id);
    if (book) {
      book.quantity = newQuantity;
      console.log(`Updated quantity of "${book.title}" to ${newQuantity}.`);
    } else {
      console.log("Book not found.");
    }
  }
  
  // Testing the Application
  displayInventory(library);
  console.log("Searching for books by title '1984':", searchByTitle(library, "1984"));
  console.log("Searching for books by author 'Harper Lee':", searchByAuthor(library, "Harper Lee"));
  console.log("Searching for Fiction books:", searchByGenre(library, Genre.Fiction));
  
  // Update quantity of a book
  updateBookQuantity(library, 1, 10);
  
  // Display updated inventory
  displayInventory(library);
  