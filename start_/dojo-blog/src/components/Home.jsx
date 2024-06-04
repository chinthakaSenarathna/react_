import useFetch from '../hook/useFetch';
import BlogsList from './BlogsList';

const Home = () => {
    // grab the data -> by data
    // but we use -> blogs
    const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs');

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