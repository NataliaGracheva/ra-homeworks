import React, { Fragment } from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function UseHook({ url }) {
    const [{ data, isLoading, hasError }] = useJsonFetch(url);

    return (
        <Fragment>
            {isLoading && <p>Loading...</p>}
            {data && <p>Status: {data.status}</p>}
            {hasError && <p>Error!!!</p>}
        </Fragment>
    );
}