import { display } from "./diplay_books.js";
import { addRemoveListeners } from "./remove_listeners.js"
import { addBook } from "./add_book.js";

class Books {
    constructor() {
        this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
        const addBookButton = document.querySelector('#addBook');
        addBookButton.addEventListener('click', addBook.bind(this));
        if (this.bookList !== null) {
            display(this);
            addRemoveListeners(this);
        }
    }
}

export { Books };