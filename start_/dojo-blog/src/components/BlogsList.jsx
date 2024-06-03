import React from 'react'

// props object De-structring...
const BlogsList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    const deleteblog = (id) => {
        blogs = blogs.filter((blog) => blog.id != id)
        console.log(blogs);
    }
    // console.log(blogs)

    return (
        <div className=''>
            <h2>{ title }</h2>
            {
                blogs.map((blog,index) => (
                    <div className='blog-priview' key={index}>
                        <h2>{ blog.title }</h2>
                        <p>written by, { blog.author }</p>
                        <button onClick={() => 
                            deleteblog(blog.id)
                        }>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogsList