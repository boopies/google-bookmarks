import React from 'react';
import './App.css'
import SearchResults from './SearchResults'
import SearchTerms from './SearchBox'


class App extends React.Component {
      constructor(props) {
        super(props);

      this.state = {
          bookVolume: [],
          searchTerm: '',
          filterPrint: '',
          filterBook: '',
          };

          this.search= this.search.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.handleKeyPress = this.handleKeyPress.bind(this);      
        }

        handleKeyPress(event) {
          if (event.key === "Enter") this.search();
        }
      
        search() {
          const url = "https://www.googleapis.com/books/v1/volumes?"
          const key = "&key=AIzaSyBdqeQ6Vk5PKWXB98W7olUGvozwBI9VcS0"
          const formattedURL = url+ 'q=' + this.state.searchTerm + key
          
          fetch(formattedURL)
            .then(res => {
              if(!res.ok) {
                throw new Error('Something went wrong, please try again later.');
              }
              return res;
            })
            .then(res => res.json())
            .then(data => {
              const bookVolume = data.items;
              this.setState({
                bookVolume: bookVolume,
                error: null
              });
            })
            .catch(err => {
              this.setState({
                error: err.message
              });
            });
      
        }

        handleChange(event) {
          this.setState({
            searchTerm: event.target.value
          });
        }
        
        handlePrintFilter(event) {
          this.setState({
            searchTerm: event.target.value
          });
        }
        
        handleBookFilter(event) {
          this.setState({
            searchTerm: event.target.value
          });
        }
      

  render(){
  const searchPage = <SearchResults bookVolume={this.state.bookVolume} />

  return (
    <>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main className='App'>
      <div>
        <SearchTerms 
          handleSearch={this.search}
          handleChange={(event)=>this.handleChange(event)}
          handleKeyPress={(event) => this.handleKeyPress(event)}
          handlePrintFilter={(event)=>this.handlePrintFilter(event)}
          handleBookFilter={(event)=>this.handleBookFilter(event)}
        />
        </div>
      {searchPage}
      </main>
    </>
  );
  }
}


export default App;