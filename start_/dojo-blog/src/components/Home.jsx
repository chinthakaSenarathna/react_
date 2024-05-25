import { useState } from 'react'
import BlogsList from './BlogsList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title:'My new website', body:'lorem ipsum...', author:'mario', id:1 },                                                                      
        { title:'Welcome party!', body:'lorem ipsum...', author:'yoshi', id:2 },
        { title:'Web dev top tips', body:'lorem ipsum...', author:'mario', id:3 }
    ]);

    return (
        <div className="home">
            <BlogsList blogs={ blogs } title={ 'All Blogs' } />
        </div>
    )
}

export default Home