import React from 'react';

function FilterOptionsPrint ( props ) {

    const { handlePrintType } = props;

        return (
            <div>
            <label>Print Type:</label>
            <form 
                action="" 
                className="print_type_filter_form"
                onChange={ e => handlePrintType( e.target.value ) }>
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


