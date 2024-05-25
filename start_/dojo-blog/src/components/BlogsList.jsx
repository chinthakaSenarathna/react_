import React from 'react'

const BlogsList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className=''>
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