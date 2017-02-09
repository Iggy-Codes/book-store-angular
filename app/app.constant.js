/* eslint no-undef: "off" */
(function () {
  angular
    .module('bookStoreApp')
    .constant('cfg', {
      apiKey: 'e1cbd2feb8ce4ebfb5da55a7dcd3f1d8',
      urlHome: 'https://api.nytimes.com/svc/books/v3/lists/overview?api-key=<%API-KEY%>',
      urlCategory: 'https://api.nytimes.com/svc/books/v3/lists/current/<%CATEGORY-NAME%>.json?api-key=<%API-KEY%>',
      urlAuthor: 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=<%API-KEY%>&author=<%AUTHOR%>',
      urlImageBook: 'https://s1.nyt.com/du/books/images/<%ISBN13%>.jpg',
      booksInHome: 8
    })
})()
