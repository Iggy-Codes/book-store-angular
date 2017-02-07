console.log('bookStore.factory.js')
/* eslint no-undef: "off" */
angular
  .module('bookStoreApp')
  .factory('BookStoreFactory', [
    '$http',
    BookStoreFactory
  ])

function BookStoreFactory ($http) {
  var apiKey = '0b43b9cd5a3c4f81b07b260f4fd8f888'
  function getOverview () { // eslint-disable-line no-unused-vars
    var url = 'https://api.nytimes.com//svc/books/v3/lists/overview?api-key=' + apiKey
    console.log(url)
    return $http.get(url)
  }

  function getNameList () { // eslint-disable-line no-unused-vars
    var url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=' + apiKey
    console.log(url)
    return $http.get(url)
  }

  function getBooksList (listName) { // eslint-disable-line no-unused-vars
    var url = 'https://api.nytimes.com/svc/books/v3/lists/current/' + listName + '.json?api-key=' + apiKey
    console.log(url)
    return $http.get(url)
  }

  function getBooksByISBN (isbn) { // eslint-disable-line no-unused-vars
    var url = 'https://api.nytimes.com//svc/books/v3/lists/best-sellers/history.json?isbn=' + isbn + '&api-key=' + apiKey
    console.log(url)
    return $http.get(url)
  }

  function getBooksByAuthor (authorName) { // eslint-disable-line no-unused-vars
    var url = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author=' + encodeURI(authorName) + '&sort-by=title&sort-order=desc&api-key=' + apiKey
    console.log(url)
    return $http.get(url)
  }

  return {
    getOverview: getOverview,
    getNameList: getNameList,
    getBooksList: getBooksList,
    getBooksByISBN: getBooksByISBN,
    getBooksByAuthor: getBooksByAuthor
  }
}
