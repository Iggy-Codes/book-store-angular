/* eslint no-undef: "off" */
(function () {
  angular
    .module('bookStoreApp')
    .constant('cfg', {
      apiKey: '0b43b9cd5a3c4f81b07b260f4fd8f888',
      urlHome: 'https://api.nytimes.com/svc/books/v3/lists/overview?api-key=<%API-KEY%>',
      urlCategory: 'https://api.nytimes.com/svc/books/v3/lists/current/<%CATEGORY-NAME%>.json?api-key=<%API-KEY%>',
      urlAuthor: 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=<%API-KEY%>&author=<%AUTHOR%>',
      urlImageBook: 'https://s1.nyt.com/du/books/images/<%ISBN13%>.jpg',
      booksInHome: 8
    })
})()
