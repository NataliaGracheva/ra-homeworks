import React from 'react'

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;

    const renderFilters = (filters) => {
        return filters.map((filter, i) => {
            return (
                <li
                    className={filter === selected ? "active" : ""}
                    onClick={() => onSelectFilter(filter)}
                    key={i} >
                    {filter}
                </li>
            );
        });
    };

    return (
        <ul className="toolbar">
            {renderFilters(filters)}
        </ul>
    );
};

export default Toolbar