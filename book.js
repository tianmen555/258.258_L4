//book.js
fetch('book.xml')
  .then(response => response.text())
  .then(xmlText => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    const books = xmlDoc.getElementsByTagName('book');
    let output = '';

    for (let i = 0; i < books.length; i++) {
      const title = books[i].getElementsByTagName('title')[0].textContent;
      const author = books[i].getElementsByTagName('author')[0].textContent;
      const price = books[i].getElementsByTagName('price')[0].textContent;
      
      output += `<h3>Title: ${title}</h3>`;
      output += `<p>Author: ${author}</p>`;
      output += `<p>Price: ${price}$</p>`;
    }

    document.getElementById('books').innerHTML = output;
  });
