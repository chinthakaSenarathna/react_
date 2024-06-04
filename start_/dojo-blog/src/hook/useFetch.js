import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getBlogs = async() => {
        try {
            const res = await fetch(url);
            // console.log(res);
            if(!res.ok){
                throw Error("could not fetch the data from that resource");
            }
            const data = await res.json();
            setData(data);
            setLoading(false);
            setError(null);
        } catch(err){
            setLoading(false);
            setError(err.message);
        }
    };

    // useEffect with dependency array...
    useEffect(() => {
        setTimeout(() => {
            getBlogs();
        },1000);
    },[]);

    // return Object...
    return { data, loading, error }
}

export default useFetch