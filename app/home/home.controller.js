/* eslint no-undef: "off" */
(function () {
  angular
  .module('bookStoreApp')
  .controller('HomeController', [
    'BookStoreFactory',
    HomeController
  ])

  function HomeController (BookStoreFactory) {
    var vm = this
    vm.showCategory = true
    BookStoreFactory.getHomeData()
    .then(function (response) {
      vm.booksHome = response
      // vm.showCategory = true
      // console.log(response)
    })
  }
})()
