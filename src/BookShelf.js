import React, { Component } from 'react'
import BookList from './BookList'

class BookShelf extends Component {
  //It helps to classify state's books array by shelf.
  defineShelf = (rStatus) => {
    return this.props.books.filter((book) => ( book.shelf === rStatus ))
  }

  render() {
    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <BookList
            bookList={this.defineShelf('currentlyReading')}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <BookList
            bookList={this.defineShelf('wantToRead')}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookList
            bookList={this.defineShelf('read')}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf
