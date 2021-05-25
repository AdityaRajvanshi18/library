const title = document.querySelector("[id=title]");
const author = document.querySelector("[id=author]");
const pages = document.querySelector("[id=pages]");
const read = document.querySelector("[id=read]");
const submit = document.querySelector(".button-submit");
const clear = document.querySelector(".button-clear")


let myLibrary = [];

function Book( title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function clearFields(){
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}

function addBookToLibrary(){
    let tempBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(tempBook);
    console.log("adding a book to library", myLibrary);
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
        //TITLE
        const bookTitle = document.createElement("div");
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add("book-entries");
        bookRow.appendChild(bookTitle);
        //AUTHOR
        const bookAuthor = document.createElement("div");
        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add("book-entries");
        bookRow.appendChild(bookAuthor);
        //PAGES
        const bookPages = document.createElement("div");
        bookPages.textContent = myLibrary[i].pages;
        bookPages.classList.add("book-entries");
        bookRow.appendChild(bookPages);
        //READ
        const bookRead = document.createElement("div");
        if(myLibrary[i].read === true){
            bookRead.textContent = "Yes";
        }
        else{
            bookRead.textContent = "No";
        }
        bookRead.classList.add("book-entries");
        bookRead.setAttribute("data-index", [i]);
        bookRow.appendChild(bookRead);
        //DELETE
        const bookDeleteContainer = document.createElement("div");
        bookDeleteContainer.classList.add("book-delete-container"); //so that i can center the square
        
        const imgDelete = document.createElement("img");
        imgDelete.src = "trash.png";
        imgDelete.setAttribute("data-index", [i]);

        const bookDelete = document.createElement("div");
        bookDelete.classList.add("book-delete");
        //bookDelete.textContent = "x";
        bookDelete.setAttribute("data-index", [i]);
        bookDelete.appendChild(imgDelete);

        bookDeleteContainer.appendChild(bookDelete);


        bookRow.appendChild(bookDeleteContainer);

    }
    const readButtons = document.querySelectorAll(".book-entries");
    readButtons.forEach(item => item.addEventListener("click", changeStatus));

    const deleteButtons = document.querySelectorAll(".book-delete");
    deleteButtons.forEach(item => item.addEventListener("click", deleteBook));
}


function clearLibrary(){
    document.querySelectorAll(".book-entries-container").forEach( e => e.parentNode.removeChild(e));
}

function changeStatus(item){
    let index = item.originalTarget.attributes["1"].textContent;
    console.log(index);
    if (this.textContent == "No"){
        this.textContent = "Yes";
        myLibrary[index].read = true;
        console.log(myLibrary);
    }
    else if(this.textContent == "Yes"){
        this.textContent = "No";
        myLibrary[index].read = false;
        console.log(myLibrary);
    }
    
}

function deleteBook(item){
    let index = item.originalTarget.attributes["1"].textContent;
    let removed = myLibrary.splice(index, 1);
    console.log("library after delete", myLibrary);
    item.srcElement.parentNode.parentNode.remove(item);
    displayBooks();
}

submit.addEventListener("click", addBookToLibrary);
clear.addEventListener("click", clearFields);


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 255, false);
myLibrary.push(theHobbit);
const circe = new Book("Circe", "Madeline Miller", 416, true);
myLibrary.push(circe);
displayBooks();

console.log("On initialisation", myLibrary)





