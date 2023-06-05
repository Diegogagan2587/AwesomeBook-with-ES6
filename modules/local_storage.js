function updateLocalStorage() {
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  export { updateLocalStorage };