import { updateLocalStorage } from "./modules/local_storage.js";
import { display } from "./modules/diplay_books.js";
import { showClickedSection } from "./modules/switch_sections.js";

/* --Navigation Bar--*/

const navAnchors = document.querySelectorAll('.nav-anchors');

navAnchors.forEach((element) => {
    element.addEventListener('click', showClickedSection);
});

/* --Navigation Bar--*/

// object constructor
class Books {
    constructor() {
        this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
        const addBookButton = document.querySelector('#addBook');
        addBookButton.addEventListener('click', this.addBook.bind(this));
        if (this.bookList !== null) {
            display(this);
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

        display(this);
        this.addListeners();
        updateLocalStorage(this);
    }

    addBook() {
        const addtitle = document.querySelector('#title').value;
        const addauthor = document.querySelector('#author').value;
        this.bookList.push({ title: addtitle, author: addauthor });
        display(this);
        this.addListeners();
        updateLocalStorage(this);
    }
}

const booksCollection = new Books();
booksCollection();