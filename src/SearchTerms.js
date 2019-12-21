import React from 'react';
import SearchBox from './SearchBox'
import FilterOptions from './FilterOptions'

class SearchTerms extends React.Component{
    render(){
        return (
            <div className="SearchBar">
            <div className="SearchBar__controls">
              <SearchBox 
                handleSearchSubmit={ this.handleSearchSubmit }
              />
              <FilterOptions 
                handlePrintType={ this.handlePrintType }
                handleBookType={ this.handleBookType }
              />
            </div>
          </div>
        )
    }
}


export default SearchTerms