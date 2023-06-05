import display from './diplay_books.js';
import addRemoveListeners from './remove_listeners.js';
import updateLocalStorage from './local_storage.js';

function removeBook(event) {
  const indexToRemove = event.target.value;
  this.bookList.splice(indexToRemove, 1);

  display(this);
  addRemoveListeners(this);
  updateLocalStorage(this);
}

export default removeBook;