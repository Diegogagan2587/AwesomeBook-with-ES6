function hideOrShow(event) {
    const bookListSection = document.querySelector('#books-section');
    const formSection = document.querySelector('#form-add-book');
    const contactSection = document.querySelector('#contact');
    if (event.target.text === 'List') {
        formSection.classList.add('hide');
        contactSection.classList.add('hide');
        bookListSection.classList.remove('hide');
    } else if (event.target.text === 'Add New') {
        formSection.classList.remove('hide');
        contactSection.classList.add('hide');
        bookListSection.classList.add('hide');
    } else if (event.target.text === 'contact') {
        formSection.classList.add('hide');
        contactSection.classList.remove('hide');
        bookListSection.classList.add('hide');
    }
}

export { hideOrShow as showClickedSection };