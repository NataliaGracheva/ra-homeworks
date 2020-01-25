import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterField, filterService, cancelFilter } from '../actions/actionCreators';

function ServiceFilter() {
    const filter = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { value } = evt.target;
        dispatch(changeFilterField(value));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(filterService(filter.value));
    }

    const handleCancel = evt => {
		evt.preventDefault();
		dispatch(cancelFilter());
	  };

    return (
        <form onSubmit={handleSubmit}>
            <input name='filter' onChange={handleChange} value={filter.value} />
            <button type='submit'>Search</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    );
}

export default ServiceFilter;