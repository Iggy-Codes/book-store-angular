/* eslint no-undef: "off" */
(function () {
  angular
  .module('bookStoreApp')
  .controller('BookController', [
    BookController
  ])

  function BookController () {
    var vm = this
    vm.title = 'Book'
  }
})()
