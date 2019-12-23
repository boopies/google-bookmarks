import React from 'react';
import SearchBox from './SearchBox'
import FilterOptions from './FilterOptions'

class SearchTerms extends React.Component{
    render(){
        return (
          <>
            <div className="SearchBar">
              <SearchBox 
                handleSearch={this.props.handleSearch}
                handleChange={this.props.handleChange}
                handleKeyPress={this.props.handleKeyPress}
              />
              <FilterOptions 
                handlePrintFilter={this.props.handlePrintFilter}
                handleBookFilter={this.props.handleBookFilter}
              />
          </div>
        </>
        )
    }
}

export default SearchTerms