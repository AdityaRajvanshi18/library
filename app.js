const title = document.querySelector("[id=title]");
const author = document.querySelector("[id=author]");
const pages = document.querySelector("[id=pages]");
const read = document.querySelector("[id=read]");
const submit = document.querySelector("[id=submit]");

let myLibrary = [];

function Book( title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

function clearFields(){
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}

function addBookToLibrary(){
    let tempBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(tempBook);
    console.log(myLibrary);
    displayBooks();
    //clearFields();
}

function displayBooks(){
    //clear library and then iterate through myLibrary and add items
    clearLibrary();
    const bookList = document.querySelector(".book-shelf");//going to append into this div
    for(let i = 0; i <myLibrary.length; i++){
        bookRow = document.createElement("div");
        bookRow.classList.add("book-entries-container");
        bookList.appendChild(bookRow);

        const bookTitle = document.createElement("div");
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add("book-entries");
        bookRow.appendChild(bookTitle);

        const bookAuthor = document.createElement("div");
        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add("book-entries");
        bookRow.appendChild(bookAuthor);

        const bookPages = document.createElement("div");
        bookPages.textContent = myLibrary[i].pages;
        bookPages.classList.add("book-entries");
        bookRow.appendChild(bookPages);

        const bookRead = document.createElement("div");
        if(myLibrary[i].checked === "on"){
            bookRead.textContent = "Yes";
        }
        else{
            bookRead.textContent = "No";
        }
        bookRead.classList.add("book-entries");
        bookRow.appendChild(bookRead);

    }
}


function clearLibrary(){
    document.querySelectorAll(".book-entries-container").forEach( e => e.parentNode.removeChild(e));
}


submit.addEventListener("click", addBookToLibrary);

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 255, "on");
myLibrary.push(theHobbit);
const circe = new Book("Circe", "Madeline Miller", 416, "on");
myLibrary.push(circe);
displayBooks();


