import React from 'react'

function SearchResultsItems(props){

    let author;
    let thumbURL;
    let description;
    let title;
    let cost;

      if ( props.volumeInfo ) {
        author = props.volumeInfo.authors !== undefined
            ? props.volumeInfo.authors[0]
            : 'No authors listed'
        title = props.volumeInfo.title !== undefined
            ? props.volumeInfo.title
            : 'No authors listed';
        thumbURL = props.volumeInfo.imageLinks.smallThumbnail !== undefined
            ? props.volumeInfo.imageLinks.smallThumbnail
            : 'http://www.hellosinkorswim.com/wordpress/wp-content/themes/semplice/images/no_thumb.png';
            description = props.volumeInfo.description !== undefined
            ? props.volumeInfo.description
            : 'No Description';
    } else {
        author = null;
        title = null;
        thumbURL = null;
        description = null;
        cost = null;
    }
  
    if ( props.saleInfo ) {
      cost = props.saleInfo.saleability === 'FOR_SALE' 
      ? props.saleInfo.listPrice.currencyCode+ ' ' + props.saleInfo.listPrice.amount
      : 'Item not for sale';
  } else {
      cost = null;
  }


return (
    <div className={props.id} id={props.id}>
        <h2>{ title }</h2>
        <div className='thumb-image'><img src={ thumbURL } alt='Book Cover' /></div>
        <h3>Written by { author }</h3>
        <p>Price: { cost }</p>
        <p>{ description }</p>
  </div>
  )
}


export default SearchResultsItems;