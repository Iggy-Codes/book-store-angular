/* eslint no-undef: "off" */
(function () {
  angular
  .module('bookStoreApp')
  .controller('BookController', [
    '$routeParams',
    'BookStoreFactory',
    BookController
  ])

  function BookController ($routeParams, BookStoreFactory) {
    var vm = this
    var isbnBook = $routeParams.isbnBook
    BookStoreFactory.getBooksDetails(isbnBook)
      .then(function (book) {
        vm.book = book
      })
  }
})()
