import React from 'react'
import Watch from '../components/Watch'

function WatchList(props) {
    const { watchList, onRemove: handleRemove } = props;

    return (
        <>
            {watchList.map(o => <Watch key={o.id} watchInfo={o}
                onRemove={handleRemove} />)}
        </>
    )
}

export default WatchList