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
    BookStoreFactory.getHomeData()
    .then(function (response) {
      vm.booksHome = response
      console.log('Home' + response)
    })
  }
})()
