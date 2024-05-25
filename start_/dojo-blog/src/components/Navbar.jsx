import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">The Dojo Blog</h1>
            <div className="navbar-links">
                <a href="/" className="navbar-links-link">Home</a>                                                  
                <a href="/create" className="navbar-links-link">New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar