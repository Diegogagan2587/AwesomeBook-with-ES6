function display(thisClass) {
  const tbody = document.querySelector('.booklist');
  tbody.innerHTML = '';
  let index = 0;
  thisClass.bookList.forEach((element) => {
    const currentRow = document.createElement('tr');
    const currentTitle = element.title;
    const currentAuthor = element.author;
    currentRow.innerHTML = `<div>"${currentTitle}"&nbsp;&nbsp<span>by</span>&nbsp;&nbsp ${currentAuthor}</div> <div><button class='removeButton' value="${index}">Remove</button></div> `;
    tbody.appendChild(currentRow);
    index += 1;
  });
}

export default display;
