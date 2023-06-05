import removeBook from './remove_book.js';

function addRemoveListeners(thisClass) {
  const removebtn = document.querySelectorAll('.removeButton');
  removebtn.forEach((element) => {
    element.addEventListener('click', removeBook.bind(thisClass));
  });
}

export default addRemoveListeners;