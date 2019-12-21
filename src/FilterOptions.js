import React from 'react';
import FilterOptionsPrint from './FilterOptionsPrint'
import FilterOptionsType from './FilterOptionsType'

class FilterOptions extends React.Component{
    render(){
        return (
            <div className='filter_categories'>
                <FilterOptionsPrint 
                    handlePrintType={ this.handlePrintType }
                />
                <FilterOptionsType 
                    handleBookType={ this.handleBookType }
                />
            </div>
        )
}
}

export default FilterOptions