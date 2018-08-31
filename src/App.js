import React from 'react'
import SearchPage from './SearchPage'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/css/App.css'


class BooksApp extends React.Component {
  state = {
    books: []
  }
//Get data from JSON and change it to array, storing at books.
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

//Change book's shelf.
  changeShelf = (book, shelf) => {
    //First, change shelf in JSON data
    BooksAPI.update(book, shelf).then(() => {
    //Second, apply the change that state's book data.
      book.shelf = shelf
    //Third, filter state's books data to display new books array at web page.
      this.setState({
        books: this.state.books.filter((filterbook) =>
          filterbook.id !== book.id
        ).concat(book)
      })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf
                books={this.state.books}
                onChangeShelf={this.changeShelf}
              />
            </div>
            <div className="open-search">
              <Link
                to="/search"
                className="open-search"
              >Add a book</Link>
            </div>
          </div>
        )}/>
        {/*This route moves to '/search' page. It associates with Link component above.*/}
        <Route path="/search" render={({history}) => (
          <SearchPage
            books={this.state.books}
            onChangeShelf={this.changeShelf}
            role="link"
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
