console.log('bookStore.service.js')
/* eslint no-undef: "off" */
angular
  .module('bookStoreApp')
  .service('BookStoreService', [
    '$resource',
    BookStoreService
  ])

function BookStoreService ($resource) {
  return $resource(
//  'https://api.nytimes.com/svc/books/v3/lists/overview'
    'http://api.nytimes.com/svc/books/:type',
    {
      api_key: '0b43b9cd5a3c4f81b07b260f4fd8f888'
    }
  )
}
