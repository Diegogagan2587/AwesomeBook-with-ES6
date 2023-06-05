import { updateLocalStorage } from "./modules/local_storage.js";

/* --Navigation Bar--*/
function hideOrShow(event) {
    const bookListSection = document.querySelector('#books-section');
    const formSection = document.querySelector('#form-add-book');
    const contactSection = document.querySelector('#contact');
    if (event.target.text === 'List') {
        formSection.classList.add('hide');
        contactSection.classList.add('hide');
        bookListSection.classList.remove('hide');
    } else if (event.target.text === 'Add New') {
        formSection.classList.remove('hide');
        contactSection.classList.add('hide');
        bookListSection.classList.add('hide');
    } else if (event.target.text === 'contact') {
        formSection.classList.add('hide');
        contactSection.classList.remove('hide');
        bookListSection.classList.add('hide');
    }
}
const navAnchors = document.querySelectorAll('.nav-anchors');

navAnchors.forEach((element) => {
    element.addEventListener('click', hideOrShow);
});

/* --Navigation Bar--*/

// object constructor
class Books {
    constructor() {
        this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
        const addBookButton = document.querySelector('#addBook');
        addBookButton.addEventListener('click', this.addBook.bind(this));
        if (this.bookList !== null) {
            this.display();
            this.addListeners();
        }
    }

    addListeners() {
        const removebtn = document.querySelectorAll('.removeButton');
        removebtn.forEach((element) => {
            element.addEventListener('click', this.removeBook.bind(this));
        });
    }

    removeBook(event) {
        const indexToRemove = event.target.value;
        this.bookList.splice(indexToRemove, 1);

        this.display();
        this.addListeners();
        updateLocalStorage();
    }

    addBook() {
        const addtitle = document.querySelector('#title').value;
        const addauthor = document.querySelector('#author').value;
        this.bookList.push({ title: addtitle, author: addauthor });
        this.display();
        this.addListeners();
        updateLocalStorage();
    }

    display() {
        const tbody = document.querySelector('.booklist');
        tbody.innerHTML = '';
        let index = 0;
        this.bookList.forEach((element) => {
            const currentRow = document.createElement('tr');
            const currentTitle = element.title;
            const currentAuthor = element.author;
            currentRow.innerHTML = `<div>"${currentTitle}"&nbsp;&nbsp<span>by</span>&nbsp;&nbsp ${currentAuthor}</div> <div><button class='removeButton' value="${index}">Remove</button></div> `;
            tbody.appendChild(currentRow);
            index += 1;
        });
    }
}

const booksCollection = new Books();
booksCollection();