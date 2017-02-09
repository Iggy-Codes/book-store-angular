/* eslint no-undef: "off" */
(function () {
  angular
  .module('bookStoreApp')
  .controller('CategoryController', [
    'BookStoreFactory',
    '$routeParams',
    CategoryController
  ])

  function CategoryController (BookStoreFactory, $routeParams) {
    var vm = this
    vm.showCategory = false
    console.log('category controller ' + $routeParams.categoryURL)
    BookStoreFactory.getCategoryName($routeParams.categoryURL)
    .then(function (response) {
      console.log('title categories')
      console.log('Category Controller Title')
      console.log(response[0].display_name)
      vm.title = response[0].display_name
    })
    BookStoreFactory.getCategoryBooks($routeParams.categoryURL)
    .then(function (response) {
      vm.booksResult = response
    })
  }
})()
