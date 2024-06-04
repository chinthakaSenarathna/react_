import React from 'react'

// props object De-structring...
const BlogsList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className='blog'>
            <h2>{ title }</h2>
            {
                blogs.map((blog,index) => (
                    <div className='blog-priview' key={index}>
                        <h2>{ blog.title }</h2>
                        <p>written by, { blog.author }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogsList