import { updateLocalStorage } from "./modules/local_storage.js";
import { display } from "./modules/diplay_books.js";
import { showClickedSection } from "./modules/switch_sections.js";
import { addRemoveListeners } from "./modules/remove_listeners.js";
import { addBook } from "./modules/add_book.js";
import { setListenersToNavigationBar } from "./modules/navigation_bar.js";
import { Books } from "./modules/books_constructor.js";

//nav-bar
setListenersToNavigationBar();

// object constructor

const booksCollection = new Books();
booksCollection();