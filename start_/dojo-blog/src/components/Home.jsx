import { useState, useEffect } from 'react'
import BlogsList from './BlogsList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const deleteblog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    }

    const getBlogs = async() => {
        const res = await fetch('http://localhost:8000/blogs');
        const data = await res.json();
        setBlogs(data);
    }

    // useEffect with dependency array...
    useEffect(() => {
        getBlogs();
    },[]);

    return (
        <div className="home">
            { blogs && <BlogsList blogs={ blogs } title={ 'All Blogs' } deleteblog={deleteblog} /> }
        </div>
    )
}

export default Home