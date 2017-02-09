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
    vm.title = 'Author'
    BookStoreFactory.getBooksByAuthor('Diana Gabaldon')
    .then(function (response) {
      vm.booksAuthor = response
      console.log('author')
      console.log(response)
    })
  }
})()
