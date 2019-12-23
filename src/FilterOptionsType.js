import React from 'react';

class FilterOptionsType extends React.Component {

        return (
            <div>
                <label>Book Type:</label> 
                <form 
                    className="book_type_filter_form"
                    onChange={ e => this.props.handleBookFilter( e.target.value ) }>
                    <select 
                        name="book-type-filter">
                        <option 
                            value="ebooks">
                                All eBooks
                        </option>
                        <option 
                            value="free-ebooks">
                            Free eBooks
                        </option>
                        <option 
                            value="paid-ebooks">
                            Paid eBooks
                            </option>
                        <option 
                            value="full">
                            Fully Available eBooks
                        </option>
                        <option 
                            value="partial">
                            Partially Available eBooks
                        </option>
                    </select>
                </form> 
            </div>
          );
    }


export default FilterOptionsType