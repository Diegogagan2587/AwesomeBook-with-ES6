import { updateLocalStorage } from "./modules/local_storage.js";
import { display } from "./modules/diplay_books.js";
import { showClickedSection } from "./modules/switch_sections.js";
import { addRemoveListeners } from "./modules/remove_listeners.js";
import { addBook } from "./modules/add_book.js";
import { setListenersToNavigationBar } from "./modules/navigation_bar.js"

//nav-bar
setListenersToNavigationBar();

// object constructor
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

const booksCollection = new Books();
booksCollection();