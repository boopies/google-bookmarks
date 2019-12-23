import React from 'react';

class FilterOptionsPrint extends React.Component {

        return (
            <div>
                <label>Print Type:</label>
                <form 
                    className="print_type_filter_form"
                    onChange={ e => this.props.handlePrintFilter( e.target.value ) }>
                    <select 
                        name="print-type-filter">
                        <option 
                            value="all">
                            All
                        </option>
                        <option 
                            value="books">
                            Only Books
                        </option>
                        <option 
                            value="magazines">
                            Only Magazines
                        </option>
                    </select>
                </form>
            </div>
          );
    }

export default FilterOptionsPrint


