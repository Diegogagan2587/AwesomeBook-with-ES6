import { removeBook } from "./remove_book.js";

function addListeners(thisClass) {
    const removebtn = document.querySelectorAll('.removeButton');
    removebtn.forEach((element) => {
        element.addEventListener('click', removeBook.bind(thisClass));
    });
}

export { addListeners as addRemoveListeners };