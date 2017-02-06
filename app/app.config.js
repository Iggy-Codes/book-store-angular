/* eslint no-undef: "off" */
angular
  .module('bookStoreApp')
  .config([
    '$routeProvider',
    routerConfig
  ])

function routerConfig ($routeProvider) {
  $routeProvider
    // .when('/home', {
    //   templateURL: 'app/home/home.tpl.html' // ,
    //   // controller: 'HomeController'
    // })

    .when('/overview', {
      templateURL: 'app/overview/overview.tpl.html',
      controller: 'OverviewController'
    })
    .otherwise('/overview')
}
