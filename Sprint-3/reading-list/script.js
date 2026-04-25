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

// Basic strategy

/* 
- Prepare your data: You’ll have an array of book objects, each with a title, author, alreadyRead, and bookCoverImage.

- Select where to render: Find the right place in your HTML (like a div or ul) to display the list.

- Loop through the books: For each book, create the necessary elements (title, author, image).

- Set styles based on alreadyRead: Change the background color depending on whether the book is read.

- Add everything to the page: Append your new elements to the DOM so they show up.
*/
document.title = "Reading list app";

const bookList = document.getElementById("readingList");

books.forEach((book) => {
  const list = document.createElement("li");

  if (book.alreadyRead) {
    list.classList.add("bookNotread");
  } else {
    list.classList.add("BookRead");
  }

  const bookTitle = document.createElement("h3");
  const author = document.createElement("p");
  const bookImage = document.createElement("img");

  bookTitle.textContent = book.title;
  author.textContent = book.author;
  bookImage.src = book.bookCoverImage;

  list.appendChild(bookTitle);
  list.appendChild(author);
  list.appendChild(bookImage);

  bookList.appendChild(list);
});
