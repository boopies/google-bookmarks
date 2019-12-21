import React from 'react';
import './App.css'
import SearchTerms from "./SearchTerms"
import SearchResults from './SearchResults'


class App extends React.Component {
      constructor(props) {
        super(props);

      this.state = {
          bookVolume: [],
          searchTerm: 'harry potter',
          filterPrint: '',
          filterBook: '',
          };
        }

        handleSearchSubmit = ( searchSubmitEvent, searchInput ) => {
          searchSubmitEvent.preventDefault();
          this.setState({
            searchTerm: searchInput
          });

          const url = "https://www.googleapis.com/books/v1/volumes?"
          const key = "&key=AIzaSyBdqeQ6Vk5PKWXB98W7olUGvozwBI9VcS0"

          const search = this.formatQuery( url, searchInput, key );

          fetch( search )
            .then(response => {
              if(!response.ok) {
                throw new Error('Something went wrong on the network. Please try again later.');
              }
              return response;
            })
            .then(response => response.json())
            .then(data => {
              const bookVolume = data.items;
              this.setState({
                bookVolume: bookVolume,
                error: null
              });
            })
            .catch(error => {
              this.setState({
                error: error.message
              });
            });
        };


        formatQuery = ( url, searchTerm, key ) => {
          const { filterBook, filterPrint } = this.state;
          let formattedQuery;
          if ( searchTerm !== '') {
            formattedQuery = '?q=' + searchTerm; 
          }
          if ( filterBook !== '') {
            formattedQuery = formattedQuery + '&filter=' + filterBook;
          }
          if ( filterPrint !== '') {
            formattedQuery = formattedQuery + '&bookType=' + filterPrint;
          }
          const formattedUrl  = url + formattedQuery + '&key=' + key; 
          console.log('formatted URL: ', formattedUrl);   
          return formattedUrl;    
        };

        handlePrintType = ( printTypeFormEvent ) => {
          if ( printTypeFormEvent ) {
            this.setState({
                filterPrint: printTypeFormEvent
            });
          } 
        };
      
        handleBookType = ( bookTypeFormEvent ) => {
          if ( bookTypeFormEvent ) {
            this.setState({
                filterBook: bookTypeFormEvent
            });
          } 
        };
      

  render(){
  const searchPage = <SearchResults bookVolume={this.state.bookVolume} />
  return (
    <>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main className='App'>
      <SearchTerms 
          handleSearchSubmit={ this.handleSearchSubmit }
          handlePrintType={ this.handlePrintType }
          handleBookType={ this.handleBookType } />
      {searchPage}
      </main>
    </>
  );
  }
}


export default App;