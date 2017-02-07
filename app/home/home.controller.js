/* eslint no-undef: "off" */
angular
  .module('bookStoreApp')
  .controller('HomeController', [
    '$scope',
    'BookStoreFactory',
    HomeController
  ])

function HomeController ($scope, BookStoreFactory) {
  console.log('HomeController')
  $scope.title = 'Home'
  // var temporal = BookStoreFactory.get()
  BookStoreFactory.getOverview()
    .then(function (response) {
      $scope.titleOverview = 'Overview Query'
      $scope.listsOverview = response.data.results.lists
      // console.log(response.data.results.lists)
    })
  BookStoreFactory.getNameList()
    .then(function (response) {
      $scope.titleListName = 'List Query'
      $scope.listsName = response.data.results
    })
  BookStoreFactory.getBooksList('hardcover-fiction')
    .then(function (response) {
      $scope.titleExampleList = response.data.results.list_name
      $scope.booksList = response.data.results.books
      // console.log(response.data.results.books)
    })
  BookStoreFactory.getBooksByISBN('9780143034759')
    .then(function (response) {
      $scope.titleBookISBN = 'Get Book By ISBN'
      $scope.booksISBN = response.data.results
      // console.log(response.data.results)
    })
  var author = 'John Grisham'
  BookStoreFactory.getBooksByAuthor(author)
    .then(function (response) {
      $scope.titleBookAuthor = 'Get Book By Author: ' + author
      $scope.booksAuthor = response.data.results
      console.log(response.data)
    })
}
