// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

document.title = "Reading list app";

const bookList = document.getElementById("readingList");

books.forEach((book) => {
  const list = document.createElement("li");
  list.classList.add("book-card");
  if (book.alreadyRead) {
    list.classList.add("bookRead");
  } else {
    list.classList.add("bookNotRead");
  }

  const bookTitle = document.createElement("h3");
  const author = document.createElement("p");
  const bookImage = document.createElement("img");

  bookTitle.textContent = book.title;
  list.appendChild(bookTitle);
  author.textContent = book.author;
  list.appendChild(author);
  bookImage.src = book.bookCoverImage;
  list.appendChild(bookImage);

  bookList.appendChild(list);
});
