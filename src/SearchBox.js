import React from 'react';

class SearchBox extends React.Component{
   
    state = {
        searchTerm: ''
    }

    handleSearchInput = ( searchInput ) => {
        this.setState({
          searchTerm: searchInput.target.value
        });
    }
    render(){

        const { handleSearchSubmit } = this.props;
        const { searchTerm } = this.state;

        return (
            <div className="SearchBox">
                    <form 
                        className="searchbar_form"
                        onSubmit={ submitEvent => handleSearchSubmit(submitEvent, searchTerm) }>
                        <input 
                            className="searchbar_input" 
                            type="text" 
                            placeholder="Search Books ... " 
                            name="search" 
                            onChange={ this.handleSearchInput } />
                        <button type="submit">Submit</button>
                    </form>
          </div>   
          )
    }
}

export default SearchBox