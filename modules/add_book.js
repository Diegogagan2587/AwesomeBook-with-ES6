import display from './diplay_books.js';
import addRemoveListeners from './remove_listeners.js';
import updateLocalStorage from './local_storage.js';

function addBook() {
  const addtitle = document.querySelector('#title').value;
  const addauthor = document.querySelector('#author').value;
  this.bookList.push({ title: addtitle, author: addauthor });
  display(this);
  addRemoveListeners(this);
  updateLocalStorage(this);
}

export default addBook;