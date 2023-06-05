function updateLocalStorage(thisClass) {
    localStorage.setItem('bookList', JSON.stringify(thisClass.bookList));
  }

  export { updateLocalStorage };