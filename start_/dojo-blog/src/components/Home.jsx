import { useState, useEffect } from 'react'
import BlogsList from './BlogsList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const deleteblog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    }

    // useEffect with dependency array...
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            })
    },[]);

    return (
        <div className="home">
            { blogs && <BlogsList blogs={ blogs } title={ 'All Blogs' } deleteblog={deleteblog} /> }
        </div>
    )
}

export default Home