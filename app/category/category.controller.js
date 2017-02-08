/* eslint no-undef: "off" */
(function () {
  angular
  .module('bookStoreApp')
  .controller('CategoryController', [
    'BookStoreFactory',
    '$rootScope',
    CategoryController
  ])

  function CategoryController (BookStoreFactory, $rootScope) {
    var vm = this
    BookStoreFactory.getCategoryBooks($rootScope.nameCategory)
    .then(function (response) {
      console.log('category controller response: ' + response)
      vm.booksCategory = response
      console.log(response)
    })
  }
})()
