/* eslint no-undef: "off" */
(function () {
  angular
  .module('bookStoreApp')
  .controller('AuthorController', [
    AuthorController
  ])

  function AuthorController () {
    var vm = this
    vm.title = 'Author'
  }
})()
