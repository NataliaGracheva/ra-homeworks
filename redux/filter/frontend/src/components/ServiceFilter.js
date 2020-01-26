import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterField, filterService, cancelFilter } from '../actions/actionCreators';

function ServiceFilter() {
    const filter = useSelector(state => state.serviceFilter);
    console.log(filter);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { value } = evt.target;
        dispatch(changeFilterField(value));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(filterService(filter.filter));
    }

    const handleCancel = evt => {
		evt.preventDefault();
		dispatch(cancelFilter());
	  };

    return (
        <form onSubmit={handleSubmit}>
            <input name='filter' onChange={handleChange} value={filter.filter} />
            <button type='submit'>Search</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    );
}

export default ServiceFilter;