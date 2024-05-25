import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">The Dojo Blog</h1>
            <div className="navbar-links">
                <a href="/" className="navbar-links-link">Home</a>                                                  
                <a 
                    href="/create" 
                    className="navbar-links-link"
                    // this is the represent JavaScript Object... -> {{}}
                    // use the camelCase...
                    style={{
                        color:'white',
                        backgroundColor: '#f1356d',
                        borderRadius: '8px',
                        padding: '5px'
                    }}
                    >New Blog
                </a>
            </div>
        </nav>
    )
}

export default Navbar