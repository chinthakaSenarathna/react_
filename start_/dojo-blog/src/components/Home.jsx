import { useState, useEffect } from 'react'
import BlogsList from './BlogsList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getBlogs = async() => {
        try {
            const res = await fetch('http://localhost:8000/blogs');
            // console.log(res);
            if(!res.ok){
                throw Error("could not fetch the data from that resource");
            }
            const data = await res.json();
            setBlogs(data);
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

    return (
        <div className="home">
            {/* conditional rendering... */}
            { error &&  <div>{ error }</div>}
            { loading && <div>Loading...</div> }
            
            {/* first check the blogs is null...then render the component... */}
            { blogs && <BlogsList blogs={ blogs } title={ 'All Blogs' } /> }
        </div>
    )
}

export default Home