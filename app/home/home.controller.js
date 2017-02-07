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
    console.log('HomeController')
    vm.title = 'Home'
  // var temporal = BookStoreFactory.get()
    BookStoreFactory.getHomeData()
    .then(function (response) {
      vm.titleOverview = 'Overview Query'
      vm.booksHome = response
      console.log(response)
    })
  }
})()
