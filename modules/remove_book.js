import display from './diplay_books.js';
import updateLocalStorage from './local_storage.js';

function removeBook(event) {
  const indexToRemove = event.target.value;
  this.bookList.splice(indexToRemove, 1);

  function addRemoveListeners(thisClass) {
    const removebtn = document.querySelectorAll('.removeButton');
    removebtn.forEach((element) => {
      element.addEventListener('click', removeBook.bind(thisClass));
    });
  }

  addRemoveListeners(this);

  display(this);
  updateLocalStorage(this);
}

export default removeBook;