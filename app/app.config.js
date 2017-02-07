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
      // .when('/overview', {
      //   templateUrl: 'app/overview/overview.tpl.html',
      //   controller: 'OverviewController'
      // })
      .otherwise('/home')
  }
})()

