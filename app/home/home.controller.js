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
      vm.booksResult = response
      console.log('Home' + response)
    })
  }
})()
