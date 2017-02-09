/* eslint no-undef: "off" */
(function () {
  angular
  .module('bookStoreApp')
  .config([
    '$routeProvider',
    routerConfig
  ])

  function routerConfig ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/tpl/thumb-books.tpl.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/category/:categoryURL', {
        templateUrl: 'app/tpl/thumb-books.tpl.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      })
      .when('/author/:author', {
        templateUrl: 'app/author/author.tpl.html',
        controller: 'AuthorController',
        controllerAs: 'vm'
      })
      .when('/book/:isbnBook', {
        templateUrl: 'app/book/book.tpl.html',
        controller: 'BookController',
        controllerAs: 'vm'
      })
      .otherwise('/home')
  }
})()

