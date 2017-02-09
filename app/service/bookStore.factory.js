/* eslint no-undef: "off" */
(function () {
  angular
    .module('bookStoreApp')
    .factory('BookStoreFactory', [
      '$http',
      'cfg',
      BookStoreFactory
    ])

  function BookStoreFactory ($http, cfg) {
    function getHomeData () { // eslint-disable-line no-unused-vars
      var url = cfg.urlHome.replace('<%API-KEY%>', cfg.apiKey)
      return $http.get(url)
        .then(getFirstEachCategory)
        .then(getBooksForHome)
    }

    function getCategoryBooks (categoryURL) {
      categoryURL = 'combined-print-and-e-book-fiction'
      var url = cfg.urlCategory.replace('<%CATEGORY-NAME%>', categoryURL).replace('<%API-KEY%>', cfg.apiKey)
      return $http.get(url)
        .then(getCategoryResults)
    }

    function getCategoryName (urlListName) {
      var url = cfg.urlHome.replace('<%API-KEY%>', cfg.apiKey)
      return $http.get(url)
        .then(getListDetails)
        .then(function (arrayList) {
          return arrayList.filter(function (element) {
            if (element.list_name_encoded === urlListName) return element
          })
        })
    }

    function getBooksDetails (isbnBook) {
      var url = cfg.urlBook.replace('<%ISBN%>', isbnBook).replace('<%API-KEY%>', cfg.apiKey)
      return $http.get(url)
      .then(function (response) {
        return response.data.results[0]
      })
    }

    function getBooksByAuthor (authorName) {
      authorName = encodeURI('Diana Gabaldon')
      // authorName = authorName.replace(/ /g,"+")
      url = cfg.urlAuthor.replace('<%AUTHOR%>', authorName).replace('<%API-KEY%>', cfg.apiKey)
      return $http.get(url)
      .then(function (response) {
        return response.data.results.map(function (bookAuthor) {
          var isbn13 = bookAuthor.isbns.lenght ? bookAuthor.isbns[0].isbn13 : ''
          // OJOOOO falta implementar 08/02
          var imageDefault
          return {
            title: bookAuthor.title,
            isbn13: isbn13,
            description: bookAuthor.description,
            img: 'https://s1.nyt.com/du/books/images/' + isbn13 + '.jpg',
            category: bookAuthor.ranks_history.display_name
          }
        })
      })
    }

    return {
      getHomeData: getHomeData,
      getCategoryBooks: getCategoryBooks,
      getCategoryName: getCategoryName,
      getBooksDetails: getBooksDetails,
      getBooksByAuthor: getBooksByAuthor
    }

    function getFirstEachCategory (categories) {
      return categories.data.results.lists.map(function (element) {
        return {
          author: element.books[0].author,
          author_url: encodeURI(element.books[0].author),
          category: element.display_name,
          category_url: element.list_name_encoded,
          description: element.books[0].description,
          img: element.books[0].book_image,
          isbn: element.books[0].primary_isbn13,
          publisher: element.books[0].publisher,
          title: element.books[0].title,
          weeksOnList: element.books[0].weeks_on_list
        }
      })
    }

    function getBooksForHome (arrayBooks) {
      var aleatoryNumbers = []
      var booksHome = []
      var booksHomeLength = cfg.booksInHome
      while (aleatoryNumbers.length < booksHomeLength && arrayBooks.length >= aleatoryNumbers.length) {
        var aleatory = getRandomIntInclusive(0, arrayBooks.length - 1)
        if (aleatoryNumbers.indexOf(aleatory) === -1) {
          booksHome.push(arrayBooks[aleatory])
          aleatoryNumbers.push(aleatory)
        }
      }
      return booksHome
    }

    function getCategoryResults (response) {
      return response.data.results.books.map(function (book) {
        return {
          rank: book.rank,
          isbn: book.primary_isbn13,
          // description: book.description,
          title: book.title,
          author: book.author,
          img: book.book_image
        }
      })
    }

    function getListDetails (response) {
      return response.data.results.lists.map(function (element) {
        return {
          // 'list_id': element.list_id,
          // 'list_name': element.list_name,
          list_name_encoded: element.list_name_encoded,
          display_name: element.display_name
        }
      })
    }

    function getRandomIntInclusive (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
})()
