import React from 'react';

class SearchBox extends React.Component{

    render(){
        return (
            <>
            <form onSubmit={event =>{
                event.preventDefault();
                this.props.handleSearch();
            }}
                >
              <input
                type="text"
                placeholder="Search for a book"
                value={this.props.searchTerm}
                onChange={e => this.props.handleChange(e)}
                onKeyPress={e => this.props.handleKeyPress(e)}
              />
              <input type="submit" value="Search" />
            </form>
          </>   
          )
    }
}

export default SearchBox