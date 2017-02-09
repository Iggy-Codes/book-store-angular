/* eslint no-undef: "off" */
(function () {
  angular
  .module('bookStoreApp')
    .controller('AuthorController', [
      '$routeParams',
      'BookStoreFactory',
      AuthorController
    ])
  function AuthorController ($routeParams, BookStoreFactory) {
    var vm = this
    vm.title = $routeParams.author
    BookStoreFactory.getBooksByAuthor($routeParams.author)
    .then(function (response) {
      vm.booksAuthor = response
    })
  }
})()
