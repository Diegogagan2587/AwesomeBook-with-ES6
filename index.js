import setListenersToNavigationBar from './modules/navigation_bar.js';
import Books from './modules/books_constructor.js';

// nav-bar
setListenersToNavigationBar();

// object constructor

const booksCollection = new Books();
booksCollection();