/* eslint no-undef: "off" */
(function () {
  console.log('bookStore.factory.js')
  angular
    .module('bookStoreApp')
    .factory('BookStoreFactory', [
      '$http',
      BookStoreFactory
    ])

  function getRandomIntInclusive (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function BookStoreFactory ($http) {
    var apiKey = '0b43b9cd5a3c4f81b07b260f4fd8f888'
    function getHomeData () { // eslint-disable-line no-unused-vars
      var url = 'https://api.nytimes.com/svc/books/v3/lists/overview?api-key=' + apiKey
      console.log(url)
      return $http.get(url)
        .then(function (response) {
          return response.data.results.lists.map(function (element) {
            return {
              'title': element.books[0].title,
              'author': element.books[0].author,
              'author_url': encodeURI(element.books[0].author),
              'img': element.books[0].book_image,
              'category': element.display_name,
              'category_url': element.list_name_encoded,
              'isbn13': element.books[0].primary_isbn13
            }
          })
        })
        .then(function (response) {
          var aleatoryNumbers = []
          var aleatoryBooks = []
          var numberAleatoryBooks = 8
          while (aleatoryNumbers.length < numberAleatoryBooks) {
            var aleatory = getRandomIntInclusive(0, response.length - 1)
            if (aleatoryNumbers.indexOf(aleatory) === -1) {
              console.log(aleatory)
              aleatoryBooks.push(response[aleatory])
              aleatoryNumbers.push(aleatory)
            }
          }
          console.log('Aleatory Books')
          console.log(aleatoryBooks)
          return aleatoryBooks
        })
    }
    function getCategoryList () { // eslint-disable-line no-unused-vars
      var url = 'https://api.nytimes.com/svc/books/v3/lists/overview?api-key=' + apiKey
      console.log(url)
      return $http.get(url)
        .then(function (response) {
          return response.data.results.lists.map(function (element) {
            return {
              'list_id': element.list_id,
              'list_name': element.list_name,
              'list_name_encoded': element.list_name_encoded,
              'display_name': element.display_name,
              'updated': element.updated
            }
          })
        })
    }
    function getCategoryBooks (categoryURL) {
      categoryURL = 'combined-print-and-e-book-fiction'
      var url = 'https://api.nytimes.com/svc/books/v3/lists/current/<%CATEGORY-NAME%>.json?api-key=' + apiKey
      url = url.replace('<%CATEGORY-NAME%>', categoryURL)
      return $http.get(url)
        .then(function (response) {
          return response.data.results.books.map(function (book) {
            return {
              'rank': book.rank,
              'primary_isbn13': book.primary_isbn13,
              'description': book.description,
              'title': book.title,
              'author': book.author,
              'img': book.book_image
            }
          })
        })
    }

    function getBooksByAuthor (authorName) {
      //var authorName = "Diana Gabaldon"
      authorName = authorName.replace(/ /g,"+")
      var url = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=' + apiKey + "&" + 'author=<%AUTHOR%>'
      url = url.replace('<%AUTHOR%>', authorName)
      return $http.get(url)
        .then(function (response) {
          return response.data.results.map(function (bookAuthor) {
            return {
              title: bookAuthor.title,
              isbn13: bookAuthor.isbns[0].isbn13,
              description: bookAuthor.description,
              img: "https://s1.nyt.com/du/books/images/" + bookAuthor.isbns[0].isbn13 + ".jpg",
              category: bookAuthor.ranks_history.display_name
            }
          })
        })
    }
    return {
      getHomeData: getHomeData,
      getCategoryBooks: getCategoryBooks,
      getBooksByAuthor: getBooksByAuthor,
      // ,
      // getNameList: getNameList,
      // getBooksList: getBooksList,
      // getBooksByISBN: getBooksByISBN,
      
    }
  }
})()
    // function getNameList () { // eslint-disable-line no-unused-vars
    //   var url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=' + apiKey
    //   console.log(url)
    //   return $http.get(url)
    // }

    // function getBooksList (listName) { // eslint-disable-line no-unused-vars
    //   var url = 'https://api.nytimes.com/svc/books/v3/lists/current/' + listName + '.json?api-key=' + apiKey
    //   console.log(url)
    //   return $http.get(url)
    // }

    // function getBooksByISBN (isbn) { // eslint-disable-line no-unused-vars
    //   var url = 'https://api.nytimes.com//svc/books/v3/lists/best-sellers/history.json?isbn=' + isbn + '&api-key=' + apiKey
    //   console.log(url)
    //   return $http.get(url)
    // }

    // function getBooksByAuthor (authorName) { // eslint-disable-line no-unused-vars
    //   var url = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author=' + encodeURI(authorName) + '&sort-by=title&sort-order=desc&api-key=' + apiKey
    //   console.log(url)
    //   return $http.get(url)
    // }
