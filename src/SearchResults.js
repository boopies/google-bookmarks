import React from 'react'
import SearchResultsList from './SearchResultsList'

class SearchResults extends React.Component{
    render(){
        return(
            <div className='search-results'>
               <h2>Search Results</h2>
               <SearchResultsList bookVolume={this.props.bookVolume} />
            </div>
        )
    }
}

export default SearchResults