import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookList extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { bookList, onChangeShelf } = this.props
    return (
      <ol className="books-grid">
      {/*Using map method to display each book from books array.*/}
      {bookList.map((book) => (
        <li key={book.id} className="book-list-item">
          <div className="book">
            <div className="book-top">
            {/*It will help to display book-cover only have imageLinks property from book.*/}
            {book.imageLinks !== undefined && (
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
              </div>
            )}
              <div className="book-shelf-changer" role="listbox">
              {/*User will see shelf of a book when clicks select tag because of this value.*/}
              {/*onChange attribute passes value of selected to this.props.onChangeShelf.*/}
                <select
                  value={book.shelf ? book.shelf : "none"}
                  aria-label="selectShelf"
                  onChange={(event)=> {
                    onChangeShelf(book, event.target.value)
                  }}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            {/*It will help to display book-author only have imageLinks property from book.*/}
            {book.author !== '' && (
              <div className="book-authors">{book.author}</div>
            )}
          </div>
        </li>
      ))}
      </ol>
    )
  }
}

BookList.propTypes = {
  onChangeShelf: PropTypes.func.isRequired
}

export default BookList
