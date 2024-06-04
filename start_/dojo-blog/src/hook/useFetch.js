import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect with dependency array...
    useEffect(() => {
        const controller = new AbortController();

        const getBlogs = async() => {
            try {
                const res = await fetch(url,{ signal: controller.signal } );
                // console.log(res);
                if(!res.ok){
                    throw Error("could not fetch the data from that resource");
                }
                const data = await res.json();
                setData(data);
                setLoading(false);
                setError(null);
            } catch(err){
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else {
                    setLoading(false);
                    setError(err.message);
                }
            }
        };

        setTimeout(() => {
            getBlogs();
        },1000);

        return () => {
            controller.abort();
            console.log("hey, stop...");
        }

    },[]);

    // return Object...
    return { data, loading, error }
}

export default useFetch