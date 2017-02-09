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
    vm.title = ' Welcome to our store '
    BookStoreFactory.getHomeData()
    .then(function (response) {
      vm.booksResult = response
      // vm.showCategory = true
      // console.log('Home' + response)
    })
  }
})()
