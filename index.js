function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});




fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    let pages = json.map(obj => obj.numberOfPages);
    let totalPages = pages.reduce((accum, curr) => accum += curr, 0);
    console.log(totalPages);
    return totalPages;
  });



  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    let characters = json.map(obj => obj.characters);
    let mergedCharacters = characters.flat(1);
    for (let char of mergedCharacters) {
      if (char === "https://anapioficeandfire.com/api/characters/1031") {
        console.log(char)
        return char;
      }
    }
  });



