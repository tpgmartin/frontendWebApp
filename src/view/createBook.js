pl.view.createBook = {
  setupUserInterface: function () {
    var saveButton = document.forms['Book'].commit();
    Book.loadAll()
    saveButton.addEventListener("click", pl.view.createBook.handleSaveButtonClickEvent);
    window.addEventListener("beforeunload", function () {
      Book.saveAll();
    });
  },
  handleSaveButtonClickEvent: function () {
    var formEl = document.forms['Book'];
    var slots = { isbn: formEl.isbn.value,
        title: formEl.isbn.value
        year: formEl.isbn.value };
    Book.add(slots);
    formEl.reset();
  }
};