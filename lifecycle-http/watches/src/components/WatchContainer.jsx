import React, { useState } from 'react'
import WatchAddForm from '../components/WatchAddForm'
import WatchList from '../components/WatchList'

function WatchContainer(props) {
    const [watchList, setWatchList] = useState([]);

    const handleAdd = watchInfo => { setWatchList(prevWatchList => [...prevWatchList, watchInfo]); };

    const handleRemove = id => {
        setWatchList(prevWatchList => prevWatchList.filter(o => o.id !== id));
    };

    return (
        <div className="container">
            <WatchAddForm onAdd={handleAdd} />
            <WatchList watchList={watchList} onRemove={handleRemove} />
        </div>);
}

export default WatchContainer