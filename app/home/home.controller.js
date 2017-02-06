console.log('home.controler.js')
/* eslint no-undef: "off" */
angular
  .module('bookStoreApp')
  .controller('HomeController', [
    '$scope',
    // 'BookStoreService',
    HomeController
  ])

function HomeController ($scope) {
  console.log('HomeController')
  $scope.title = 'Home'
  // var temporal = BookStoreService.get({
  //   type: 'v3/lists/age-groups.json'
  // })
  // console.log(temporal)
}

// function HomeController ($scope, BookStoreService) {
//   console.log('HomeController')
//   $scope.title = 'Home'
//   var temporal = BookStoreService.get({
//     type: 'v3/lists/age-groups.json'
//   })
//   console.log(temporal)
// }
