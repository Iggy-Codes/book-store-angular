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
        templateUrl: 'app/home/home.tpl.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/category', {
        templateUrl: 'app/category/category.tpl.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      })
      .otherwise('/home')
  }
})()

