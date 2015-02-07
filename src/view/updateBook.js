pl.view.updateBook = {
  setupUserInterface: function () }{
    var formEl = document.forms['Book'],
        saveButton = formEl.commit,
        selectBookEl = formEl.selectBookEl;
    var key="", keys=[], book=null, optionEl=null;
    Book.loadAll();
    keys = Object.keys(Book.instances);
    for(i=0; i<keys.length; i++) {
      key = keys[i];
      book = Book.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = book.title;
      optionEl.value = book.isbn;
      selectBookEl.add(optionEl, null);
    }
    selectBookEl.addEventListener("change", function () {
      var book=null, key=selectBookEl.value;
      if (key) {
        book = Book.instances[key];
        formEl.isbn.value = book.isbn;
        formEl.title.value = book.title;
        formEl.year.value = book.year;
      } else {
        formEl.reset();
      }  
    }); 
    saveButton.addEventListener("click", pl.view.updateBook.handleUpdateButtonClickEvent);
    window.addEventListener("beforeunload", function () {
      Book.saveAll();
    });
  },
  handleUpdateButtonClickEvent: function () {
    var formEl = document.forms['Book'];
    var slots = { isbn: formEl.isbn.value, 
        title: formEl.title.value,
        year: formEl.year.value
    };
    Book.update(slots);
    formEl.reset();
  }
};