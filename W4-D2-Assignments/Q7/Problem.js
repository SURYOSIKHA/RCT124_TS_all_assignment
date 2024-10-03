// TypeScript Library Inventory Management Application
// Enums for Book Genres
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["Fantasy"] = "Fantasy";
    Genre["ScienceFiction"] = "Science Fiction";
})(Genre || (Genre = {}));
// Initialize Library Inventory
var library = {
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
function displayInventory(library) {
    console.log("Library Inventory:");
    library.inventory.forEach(function (book) {
        console.log("ID: ".concat(book.id, ", Title: \"").concat(book.title, "\", Author: ").concat(book.author, ", Genre: ").concat(book.genre, ", Quantity: ").concat(book.quantity, ", Format: ").concat(book.format));
    });
}
// Function to Search for Books by Title
function searchByTitle(library, title) {
    return library.inventory.filter(function (book) { return book.title.includes(title); });
}
// Function to Search for Books by Author
function searchByAuthor(library, author) {
    return library.inventory.filter(function (book) { return book.author.includes(author); });
}
// Function to Search for Books by Genre
function searchByGenre(library, genre) {
    return library.inventory.filter(function (book) { return book.genre === genre; });
}
// Function to Update Book Quantity
function updateBookQuantity(library, id, newQuantity) {
    var book = library.inventory.find(function (book) { return book.id === id; });
    if (book) {
        book.quantity = newQuantity;
        console.log("Updated quantity of \"".concat(book.title, "\" to ").concat(newQuantity, "."));
    }
    else {
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
