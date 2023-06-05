function addListeners(thisClass) {
    const removebtn = document.querySelectorAll('.removeButton');
    removebtn.forEach((element) => {
        element.addEventListener('click', thisClass.removeBook.bind(thisClass));
    });
}

export { addListeners as addRemoveListeners };