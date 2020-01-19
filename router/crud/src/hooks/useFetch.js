import { useEffect, useState } from 'react';

export default function useFetch(url, initial) {
    const [data, setData] = useState(initial);//add initial?

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log(response.status);
                }
                return response.json()
            })
            .then(data => setData(data))
    }, [url]);

    // return [data, setData];
    return [data];
}