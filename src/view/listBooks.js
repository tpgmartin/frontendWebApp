pl.view.listBooks = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#body>tbody");
    var keys=[], key="", row={};
    Book.loadAll();
    keys = Object.keys( Book.instances );
    for (i=0; i<keys.length; i++) {
      key = keys[i];
      row = tableBodyEl.insertRow();
      row.insertCell(-1).textContent = Book.instances[key].isbn;
      row.insertCell(-1).textContent = Book.instances[key].title;
      row.insertCell(-1).textContent = Book.instances[key].year;
    }
  } 
};