import React, { Component } from 'react';
import BookList from './BookList'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class SearchPage extends Component {
  static propTypes = {
    searchResult: PropTypes.array.isRequired
  }
  state = {
    query: '',
    searchResult: [],
    noResult: false
  }
  //Update query when user types texts.
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  //Delete query and searchResult array when user click back button.
  deleteQuery = (query) => {
    this.setState({ query: '', searchResult: [] })
  }


  render() {
    const { query, searchResult, noResult } = this.state
    const { onChangeShelf } = this.props
    let resultVariable = searchResult
    //After user types query, search function starts.
    if (query) {
      BooksAPI.search(query).then((response) => {
        //There is no error at response, then change state's searchResult.
        if(!response.error) {
          this.setState({ searchResult: response, noResult: false })
        } else {
          this.setState({ searchResult: [], noResult: true })
        }
      })
    }


    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/*This is backspace link to main page.*/}
          <Link
            to="/"
            className="close-search"
            onClick={this.deleteQuery}
          >Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*input field that updates query to search book.*/}
            <input
              className='search-books'
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        {/*If query has value and result from search function,
         data will display using BookList component. */}
        { query !== '' && (
          <div className="search-books-results">
            <BookList
            bookList={this.state.searchResult}
            onChangeShelf={this.props.onChangeShelf}
            />
          </div>
        )}
        {/*When there is no result from search function, This message will show at page.*/}
        { noResult === true && (
          <div>
            <h3> No {this.state.query} in the data </h3>
          </div>
        )}
      </div>
    )
  }
}

SearchPage.propTypes = {
  searchResult: PropTypes.func.isRequired
}

export default SearchPage;
