import {useState, useEffect} from 'react';
import fetch from 'cross-fetch';

export const useFetch = (url, ref, initialValue) => {
    const [response, setData] = useState(initialValue);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if(ref.current) {
            (async () => {
                try {
                    const res = await fetch(url);
                    const json = await res.json();
                    setData(json);
                } catch(err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            })();
        }
        return () => {
            ref.current = false;
        }
    },[url, ref]);

    return {loading, response, error};
}