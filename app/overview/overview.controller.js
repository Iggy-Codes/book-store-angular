console.log('carga fichero overview.controller.js')
/* eslint no-undef: "off" */
angular
  .module('bookStoreApp')
  .controller('OverviewController', [
    '$scope',
    OverviewController
  ])
console.log('jhj')
function OverviewController ($scope) {
  console.log('overview')
  $scope.title = 'Overview'
}
