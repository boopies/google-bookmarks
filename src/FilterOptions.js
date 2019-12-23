import React from 'react';
import FilterOptionsPrint from './FilterOptionsPrint'
import FilterOptionsType from './FilterOptionsType'

class FilterOptions extends React.Component{
    render(){
        return (
            <>
                <FilterOptionsPrint 
                    handlePrintFilter={this.props.handlePrintFilter}
                />
                <FilterOptionsType 
                    handleBookFilter={this.props.handleBookFilter}
                />
            </>
        )
}
}

export default FilterOptions