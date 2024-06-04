import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">The Dojo Blog</h1>
            <div className="navbar-links">
                <Link to="/" className="navbar-links-link">Home</Link>                                                  
                <Link to="/create" className="navbar-links-link">New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar