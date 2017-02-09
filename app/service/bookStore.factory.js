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
        .then(getOverviewBooks)
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
      getBooksByAuthor: getBooksByAuthor
    }

    function getOverviewBooks (response) {
      var aBooks = []
      console.log('getCategorBooksyOverview')
      console.log(response.data.results.lists)
      response.data.results.lists.forEach(function (category) {
        var categoryDisplay = category.display_name
        var categoryEncoded = category.list_name_encoded
        category.books.forEach(function (book) {
          aBooks.push({
            author: book.author,
            author_url: encodeURI(book.author),
            category: categoryDisplay,
            category_url: categoryEncoded,
            description: book.description,
            img: book.book_image,
            isbn: book.primary_isbn13,
            publisher: book.publisher,
            title: book.title,
            weeksOnList: book.weeks_on_list
          })
        })
      })
      return aBooks
    }

    function getBooksForHome (arrayBooks) {
      var booksHome = []
      var booksHomeLengthMax = (cfg.booksInHome < arrayBooks.length) ? cfg.booksInHome : arrayBooks.length
      console.log(booksHomeLengthMax)
      while (booksHome.length < booksHomeLengthMax) {
        var aleatory = getRandomIntInclusive(0, arrayBooks.length - 1)
        // Check that the titles are diferent
        var isInArray = false
        booksHome.forEach(function (book) {
          if (book.title === arrayBooks[aleatory].title) isInArray = true
        })
        if (!isInArray) {
          booksHome.push(arrayBooks[aleatory])
        }
      }
      return booksHome
    }

    function getCategoryResults (response) {
      return response.data.results.books.map(function (book) {
        return {
          author: book.author,
          description: book.description,
          img: book.book_image,
          isbn: book.primary_isbn13,
          publisher: book.publisher,
          rank: book.rank,
          title: book.title
        }
      })
    }

    function getListDetails (response) {
      return response.data.results.lists.map(function (element) {
        return {
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
