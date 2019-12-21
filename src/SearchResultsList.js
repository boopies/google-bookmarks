import React from 'react'
import SearchResultsItems from './SearchResultsItems'

class SearchResultsList extends React.Component{

    render(){
    const books = this.props.bookVolume.map((bookVolume, i) =>
      <SearchResultsItems { ...bookVolume } key={i} />);
    return (
      <div className="search-results-list">
        {books}
      </div>
        )
    }
}

SearchResultsList.defaultProps = {
  booksVolume: {}
  };

export default SearchResultsList