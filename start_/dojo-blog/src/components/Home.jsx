import { useState, useEffect } from 'react'
import BlogsList from './BlogsList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);

    const getBlogs = async() => {
        const res = await fetch('http://localhost:8000/blogs');
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
    };

    // useEffect with dependency array...
    useEffect(() => {
        setTimeout(() => {
            getBlogs();
        },1000);
    },[]);

    return (
        <div className="home">
            { loading && <div>Loading...</div> }
            
            {/* first check the blogs is null...then render the component... */}
            { blogs && <BlogsList blogs={ blogs } title={ 'All Blogs' } /> }
        </div>
    )
}

export default Home