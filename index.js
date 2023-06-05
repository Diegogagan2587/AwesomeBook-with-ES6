import { updateLocalStorage } from "./modules/local_storage.js";
import { display } from "./modules/diplay_books.js";
import { showClickedSection } from "./modules/switch_sections.js";
import { addRemoveListeners } from "./modules/remove_listeners.js";

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
            addRemoveListeners(this);
        }
    }

    addBook() {
        const addtitle = document.querySelector('#title').value;
        const addauthor = document.querySelector('#author').value;
        this.bookList.push({ title: addtitle, author: addauthor });
        display(this);
        addRemoveListeners(this);
        updateLocalStorage(this);
    }
}

const booksCollection = new Books();
booksCollection();